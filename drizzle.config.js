/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai_resume_mockup_owner:tgIbTrWA29hG@ep-still-bird-a5teskyy.us-east-2.aws.neon.tech/ai-resume-builder?sslmode=require',
    }
  };