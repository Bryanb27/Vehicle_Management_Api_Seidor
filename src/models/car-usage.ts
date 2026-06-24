export interface CarUsage {
    id: string;

    carId: string;
    driverId: string;

    reason: string;

    startDate: Date;
    endDate?: Date;
}