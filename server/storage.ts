import { type User, type InsertUser, type ResumeAnalysis, type InsertResumeAnalysis } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Resume analysis methods
  createResumeAnalysis(analysis: InsertResumeAnalysis): Promise<ResumeAnalysis>;
  getResumeAnalysis(id: string): Promise<ResumeAnalysis | undefined>;
  getRecentAnalyses(limit?: number): Promise<ResumeAnalysis[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private resumeAnalyses: Map<string, ResumeAnalysis>;

  constructor() {
    this.users = new Map();
    this.resumeAnalyses = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createResumeAnalysis(insertAnalysis: InsertResumeAnalysis): Promise<ResumeAnalysis> {
    const id = randomUUID();
    const analysis: ResumeAnalysis = {
      ...insertAnalysis,
      id,
      jobDescription: insertAnalysis.jobDescription ?? null,
      createdAt: new Date(),
    };
    this.resumeAnalyses.set(id, analysis);
    return analysis;
  }

  async getResumeAnalysis(id: string): Promise<ResumeAnalysis | undefined> {
    return this.resumeAnalyses.get(id);
  }

  async getRecentAnalyses(limit: number = 10): Promise<ResumeAnalysis[]> {
    const analyses = Array.from(this.resumeAnalyses.values());
    return analyses
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
