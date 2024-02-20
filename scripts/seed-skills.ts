import { db, pool } from "@/lib/db";
import { skills } from "@/lib/schema";
import { NewSkill } from "@/lib/types";
import crypto from 'crypto';

const data = [
    "Next.js",
    "React",
    "PostgreSQL",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Mantine",
    "TypeScript",
    "Vercel",
]

export default async function main() {
    for(let skill of data) {
        const newSkill: NewSkill = {
            id: crypto.randomUUID(),
            name: skill,
        }
        await db.insert(skills).values(newSkill).onConflictDoNothing();
    }
    pool.end();
}

if (require.main === module) main();