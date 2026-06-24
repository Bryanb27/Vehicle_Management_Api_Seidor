import { CarUsage } from "../models/car-usage";

export class CarUsageRepository {
    private usages: CarUsage[] = [];

    findAll(): CarUsage[] {
        return this.usages;
    }

    findById(id: string): CarUsage | undefined {
        return this.usages.find(usage => usage.id === id);
    }

    save(usage: CarUsage): void {
        this.usages.push(usage);
    }

    update(usage: CarUsage): void {
        const index = this.usages.findIndex(u => u.id === usage.id);

        if (index !== -1) {
            this.usages[index] = usage;
        }
    }
}