import { db, pool } from "@/lib/db"
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

const JOB_TITLES = [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Project Manager",
    "DevOps Engineer",
    "Data Engineer",
]

async function main(){ 
    const res = await db.query.users.findMany();

    for(let user of res) {
        const randomIdx = Math.floor(Math.random() * JOB_TITLES.length);
        await db
        .update(users)
        .set({ jobTitle: JOB_TITLES[randomIdx] })
        .where(eq(users.id, user.id));
    }
    pool.end();
}

main();