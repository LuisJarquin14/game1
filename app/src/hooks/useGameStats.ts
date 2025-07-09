import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { GameSettings } from '../types/game';

interface GameSession {
  id?: string;
  mode: string;
  players: number;
  cardsPlayed: number;
  difficulty: {
    min: number;
    max: number;
  };
  duration: number;
  timestamp: Date;
}

interface GameStats {
  totalGames: number;
  favoriteMode: string;
  averageCardsPerGame: number;
  totalPlaytime: number;
}

export const useGameStats = () => {
  const [stats, setStats] = useState<GameStats>({
    totalGames: 0,
    favoriteMode: 'family',
    averageCardsPerGame: 0,
    totalPlaytime: 0
  });
  const [loading, setLoading] = useState(true);

  // Save a game session
  const saveGameSession = async (gameSettings: GameSettings, cardsPlayed: number, duration: number) => {
    try {
      const gameSession: GameSession = {
        mode: gameSettings.mode,
        players: gameSettings.players.length,
        cardsPlayed,
        difficulty: gameSettings.difficulty,
        duration,
        timestamp: new Date()
      };

      // Only save if we have a valid project ID
      if (process.env.NODE_ENV === 'production' || (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')) {
        await addDoc(collection(db, 'gameSessions'), gameSession);
        console.log('Game session saved successfully');
      } else {
        console.log('Game session would be saved:', gameSession);
      }
    } catch (error) {
      console.error('Error saving game session:', error);
    }
  };

  // Load game statistics
  const loadStats = async () => {
    try {
      setLoading(true);
      
      // Only load from Firebase in production
      if (process.env.NODE_ENV === 'production' || (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1')) {
        const q = query(collection(db, 'gameSessions'), orderBy('timestamp', 'desc'), limit(100));
        const querySnapshot = await getDocs(q);
        
        const sessions: GameSession[] = [];
        querySnapshot.forEach((doc) => {
          sessions.push({ id: doc.id, ...doc.data() } as GameSession);
        });

        // Calculate statistics
        const totalGames = sessions.length;
        const totalCards = sessions.reduce((sum, session) => sum + session.cardsPlayed, 0);
        const totalTime = sessions.reduce((sum, session) => sum + session.duration, 0);
        
        // Find favorite mode
        const modeCounts = sessions.reduce((acc, session) => {
          acc[session.mode] = (acc[session.mode] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        const favoriteMode = Object.entries(modeCounts).reduce((a, b) => 
          modeCounts[a[0]] > modeCounts[b[0]] ? a : b
        )[0] || 'family';

        setStats({
          totalGames,
          favoriteMode,
          averageCardsPerGame: totalGames > 0 ? Math.round(totalCards / totalGames) : 0,
          totalPlaytime: totalTime
        });
      } else {
        // Demo data for development
        setStats({
          totalGames: 5,
          favoriteMode: 'friends',
          averageCardsPerGame: 12,
          totalPlaytime: 1800 // 30 minutes
        });
      }
    } catch (error) {
      console.error('Error loading stats:', error);
      // Fallback to demo data
      setStats({
        totalGames: 0,
        favoriteMode: 'family',
        averageCardsPerGame: 0,
        totalPlaytime: 0
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return {
    stats,
    loading,
    saveGameSession,
    refreshStats: loadStats
  };
};

interface LeaderboardEntry {
  playerCount: string;
  games: number;
  totalCards: number;
  avgCards: number;
}

// Hook for leaderboard (most active players)
export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadLeaderboard = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'gameSessions'), orderBy('timestamp', 'desc'), limit(50));
      const querySnapshot = await getDocs(q);
      
      const playerStats: Record<string, { games: number, totalCards: number }> = {};
      
      querySnapshot.forEach((doc) => {
        const session = doc.data() as GameSession;
        const key = `${session.players}_players`;
        
        if (!playerStats[key]) {
          playerStats[key] = { games: 0, totalCards: 0 };
        }
        
        playerStats[key].games += 1;
        playerStats[key].totalCards += session.cardsPlayed;
      });

      const leaderboardData = Object.entries(playerStats).map(([key, stats]) => ({
        playerCount: key,
        games: stats.games,
        totalCards: stats.totalCards,
        avgCards: Math.round(stats.totalCards / stats.games)
      })).sort((a, b) => b.games - a.games);

      setLeaderboard(leaderboardData);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

  return {
    leaderboard,
    loading,
    refreshLeaderboard: loadLeaderboard
  };
};
