import request from "supertest";
import app from "../app";

describe("API Tests", () => {
    it("should create a car via API", async () => {
        const response = await request(app)
            .post("/cars")
            .send({
                plate: "ABC1234",
                color: "Black",
                brand: "Toyota"
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should list cars", async () => {
        await request(app)
            .post("/cars")
            .send({
                plate: "ABC1234",
                color: "Black",
                brand: "Toyota"
            });

        const response = await request(app)
            .get("/cars");

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});