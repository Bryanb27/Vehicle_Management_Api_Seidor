import { DriverService } from "../services/driver.service";
import { DriverRepository } from "../repositories/driver.repository";

describe("DriverService", () => {
    let driverService: DriverService;

    beforeEach(() => {
        driverService = new DriverService(
            new DriverRepository()
        );
    });

    it("should create driver", () => {
        const driver =
            driverService.create("Bryan");

        expect(driver).toHaveProperty("id");
        expect(driver.name).toBe("Bryan");
    });

    it("should filter by name", () => {
        driverService.create("Bryan");
        driverService.create("João");

        const result =
            driverService.findAll("Bry");

        expect(result.length).toBe(1);
    });
});