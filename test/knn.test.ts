import { getKNearestNeighborsByUserId } from "@/lib/knn";
import { expect, test } from "vitest";
import util from "util";

// Nearest three person test
test("k nearest neighbors", async () => {
    const users = await getKNearestNeighborsByUserId("0c200bd1-2352-4b6d-9bcc-e87bf4d9226e", 3);

    console.log(util.inspect(users, { colors: true, depth: null }));
    expect(users.length).toBe(3);
})