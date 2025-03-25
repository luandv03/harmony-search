const productionOrder = [
    {
        id: "LSX0001",
        name: "Sản xuất áo sơ mi",
        quantity: 30000,
        startTime: "2025-03-25T08:00:00Z",
        endTime: "2025-03-27T08:00:00Z", // Thời gian kết thúc dự kiến
    },
    {
        id: "LSX0002",
        name: "Sản xuất quần tây",
        quantity: 50000,
        startTime: "2025-03-25T08:00:00Z",
        endTime: "2025-03-31T08:00:00Z",
    },
];

// Các công đoạn cần thực hiện trong từng quy trình
const operations = [
    {
        id: "OP001",
        productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
        name: "Cắt vải may áo sơ mi",
        quantity: 30000,
        requiredPosition: "Nhân viên cắt vải",
        taskType: "T001",
        prequisite: "",
    },

    {
        id: "OP002",
        productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
        name: "May áo sơ mi",
        quantity: 30000,
        requiredPosition: "Nhân viên may",
        taskType: "T002",
        prequisite: "OP001", // Cắt vải
    },

    {
        id: "OP003",
        productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
        name: "Đóng gói áo sơ mi",
        quantity: 30000,
        requiredPosition: "Nhân viên đóng gói",
        taskType: "T003",
        prequisite: "OP002", // May áo
    },
    {
        id: "OP004",
        productionOrderId: "LSX0002", // ID của đơn hàng sản xuất
        name: "Cắt vải may quần tây",
        quantity: 50000,
        requiredPosition: "Nhân viên cắt vải",
        taskType: "T004",
        prequisite: "",
    },
    {
        id: "OP005",
        productionOrderId: "LSX0002", // ID của đơn hàng sản xuất
        name: "May áo sơ mi",
        quantity: 50000,
        requiredPosition: "Nhân viên may",
        taskType: "T005",
        prequisite: "OP004", // Cắt vải
    },
    {
        id: "OP006",
        productionOrderId: "LSX0002", // ID của đơn hàng sản xuất
        name: "Đóng gói áo sơ mi",
        quantity: 50000,
        requiredPosition: "Nhân viên đóng gói",
        taskType: "T006",
        prequisite: "OP005", // May áo
    },
];

const workers = [
    // Công nhân cắt vải
    {
        id: "W001",
        name: "Nguyễn Văn A",
        position: "Nhân viên cắt vải",
        salaryPerHour: 5, // Lương theo giờ
        kpis: [
            {
                taskType: "T001",
                productivityKPI: 80, // Số lượng hoàn thành / thời gian hoàn thành (chiếc / giờ)
                qualityKPI: 1, // (Số lượng đạt chuẩn / Số lượng hoàn thành)*100%
                efficiencyKPI: 0.95, // (Số lượng hoàn thành / Số lượng cần bàn giao)*100%
            },
            {
                taskType: "T004",
                productivityKPI: 73,
                qualityKPI: 0.98,
                efficiencyKPI: 0.92,
            },
        ],
    },
    {
        id: "W002",
        name: "Phạm Thị D",
        position: "Nhân viên cắt vải",
        productivityKPI: 90,
        qualityKPI: 1,
        efficiencyKPI: 0.92,
        salaryPerHour: 6, // Lương theo giờ
    },
    {
        id: "W003",
        name: "Đinh Văn Luận",
        position: "Nhân viên cắt vải",
        productivityKPI: 100,
        qualityKPI: 1,
        efficiencyKPI: 0.94,
        salaryPerHour: 5, // Lương theo giờ
    },
    {
        id: "W004",
        name: "Dương Văn Giới",
        position: "Nhân viên cắt vải",
        productivityKPI: 60,
        qualityKPI: 1,
        efficiencyKPI: 0.96,
        salaryPerHour: 7, // Lương theo giờ
    },
    {
        id: "W005",
        name: "Nguyễn Đức Phú",
        position: "Nhân viên cắt vải",
        productivityKPI: 70,
        qualityKPI: 1,
        efficiencyKPI: 0.93,
        salaryPerHour: 7, // Lương theo giờ
    },

    // Công nhân may áo
    {
        id: "W006",
        name: "Nguyễn Thị E",
        position: "Nhân viên may",
        productivityKPI: 40,
        qualityKPI: 0.96,
        efficiencyKPI: 0.91,
        salaryPerHour: 8, // Lương theo giờ
    },
    {
        id: "W007",
        name: "Trần Thị B",
        position: "Nhân viên may",
        productivityKPI: 42,
        qualityKPI: 0.95,
        efficiencyKPI: 0.92,
        salaryPerHour: 9, // Lương theo giờ
    },
    {
        id: "W008",
        name: "Nguyễn Văn Thanh",
        position: "Nhân viên may",
        productivityKPI: 41,
        qualityKPI: 0.97,
        efficiencyKPI: 0.93,
        salaryPerHour: 10, // Lương theo giờ
    },
    {
        id: "W009",
        name: "Trần Văn Chính",
        position: "Nhân viên may",
        productivityKPI: 38,
        qualityKPI: 0.95,
        efficiencyKPI: 0.9,
        salaryPerHour: 9, // Lương theo giờ
    },
    {
        id: "W010",
        name: "Trần Phi Đức",
        position: "Nhân viên may",
        productivityKPI: 45,
        qualityKPI: 0.94,
        efficiencyKPI: 0.89,
        salaryPerHour: 11, // Lương theo giờ
    },

    // Công nhân đóng gói
    {
        id: "W011",
        name: "Lê Văn Trang",
        position: "Nhân viên đóng gói",
        productivityKPI: 90,
        qualityKPI: 0.96,
        efficiencyKPI: 0.94,
        salaryPerHour: 5, // Lương theo giờ
    },
    {
        id: "W012",
        name: "Hoàng Hải Phong",
        position: "Nhân viên đóng gói",
        productivityKPI: 92,
        qualityKPI: 0.95,
        efficiencyKPI: 0.92,
        salaryPerHour: 6, // Lương theo giờ
    },
    {
        id: "W013",
        name: "Nguyễn Trọng Khánh Duy",
        position: "Nhân viên đóng gói",
        productivityKPI: 95,
        qualityKPI: 0.97,
        efficiencyKPI: 0.91,
        salaryPerHour: 5, // Lương theo giờ
    },
    {
        id: "W014",
        name: "Hà Duy Bách",
        position: "Nhân viên đóng gói",
        productivityKPI: 97,
        qualityKPI: 0.96,
        efficiencyKPI: 0.92,
        salaryPerHour: 6, // Lương theo giờ
    },
    {
        id: "W015",
        name: "Lương Hải Đăng",
        position: "Nhân viên đóng gói",
        productivityKPI: 92,
        qualityKPI: 0.95,
        efficiencyKPI: 0.98,
        salaryPerHour: 8, // Lương theo giờ
    },
];

const HMCR = 0.9; // Harmony Memory Consideration Rate
const PAR = 0.3; // Pitch Adjustment Rate
const HMS = 10; // Harmony Memory Size
const maxIterations = 1000;

// Calculate the number of products a worker can make per hour
function calculateProductivity(worker) {
    return worker.qualityKPI * worker.productivityKPI;
}

// Calculate the time required for an operation
function calculateOperationTime(operation, workers) {
    let totalProductivity = workers.reduce(
        (sum, worker) => sum + calculateProductivity(worker),
        0
    );
    return operation.quantity / totalProductivity;
}

// Check if all prerequisites are completed
function arePrerequisitesCompleted(operation, completedOperations) {
    if (!operation.prequisite) return true;
    return completedOperations.includes(operation.prequisite);
}

// Initialize Harmony Memory
function initializeHarmonyMemory() {
    let harmonyMemory = [];
    for (let i = 0; i < HMS; i++) {
        let harmony = [];
        let completedOperations = [];
        let currentTime = 0;
        let operationTimes = {};
        let remainingOperations = [...operations]; // Create a copy of operations

        while (remainingOperations.length > 0) {
            let availableOperations = remainingOperations.filter((op) =>
                arePrerequisitesCompleted(op, completedOperations)
            );
            if (availableOperations.length === 0) break;

            for (let operation of availableOperations) {
                let availableWorkers = workers.filter(
                    (worker) =>
                        worker.position === operation.requiredPosition &&
                        !worker.flag
                );

                // Assign all available workers to the operation
                let selectedWorkers = [...availableWorkers];

                let operationTime = calculateOperationTime(
                    operation,
                    selectedWorkers
                );

                // Ensure the operation starts after its prerequisite is completed
                let startTime = currentTime;
                if (
                    operation.prequisite &&
                    operationTimes[operation.prequisite]
                ) {
                    startTime = Math.max(
                        startTime,
                        operationTimes[operation.prequisite].endTime
                    );
                }

                harmony.push({
                    operation,
                    workers: selectedWorkers,
                    startTime: startTime,
                    endTime: startTime + operationTime,
                });
                completedOperations.push(operation.id);
                currentTime = startTime + operationTime;
                operationTimes[operation.id] = {
                    startTime: startTime,
                    endTime: startTime + operationTime,
                };

                // Remove completed operation from prerequisites of remaining operations
                remainingOperations = remainingOperations.filter(
                    (op) => op.id !== operation.id
                );
                remainingOperations.forEach((op) => {
                    if (op.prequisite === operation.id) {
                        op.prequisite = "";
                    }
                });
            }
        }
        harmonyMemory.push(harmony);
    }
    return harmonyMemory;
}

// Evaluate a harmony
function evaluateHarmony(harmony) {
    let totalTime = 0;
    let totalCost = 0;
    let workerSchedules = {};
    let completedOperations = [];

    for (let { operation, workers, startTime, endTime } of harmony) {
        let operationTime = endTime - startTime;

        for (let worker of workers) {
            let workerOperationTime = operationTime;
            let workerCost = workerOperationTime * worker.salaryPerHour;
            totalCost += workerCost;

            if (!workerSchedules[worker.id]) {
                workerSchedules[worker.id] = {
                    totalTime: 0,
                    totalCost: 0,
                    schedule: [],
                    productsCompleted: 0,
                };
            }

            workerSchedules[worker.id].totalTime += workerOperationTime;
            workerSchedules[worker.id].totalCost += workerCost;
            workerSchedules[worker.id].productsCompleted +=
                calculateProductivity(worker) * workerOperationTime;
            workerSchedules[worker.id].schedule.push({
                operation,
                operationTime: workerOperationTime,
                startTime: startTime,
                endTime: endTime,
            });
        }

        completedOperations.push(operation.id);
        totalTime = Math.max(totalTime, endTime);
    }

    return { totalTime, totalCost, workerSchedules };
}

// Harmony Search algorithm
function harmonySearch() {
    let harmonyMemory = initializeHarmonyMemory();
    let bestHarmony = harmonyMemory[0];
    let bestEvaluation = evaluateHarmony(bestHarmony);

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let newHarmony = [];
        let completedOperations = [];
        let currentTime = 0;
        let operationTimes = {};
        let remainingOperations = [...operations]; // Create a copy of operations

        while (remainingOperations.length > 0) {
            let availableOperations = remainingOperations.filter((op) =>
                arePrerequisitesCompleted(op, completedOperations)
            );
            if (availableOperations.length === 0) break;

            for (let operation of availableOperations) {
                let availableWorkers = workers.filter(
                    (worker) =>
                        worker.position === operation.requiredPosition &&
                        !worker.flag
                );

                // Assign all available workers to the operation
                let selectedWorkers = [...availableWorkers];

                let operationTime = calculateOperationTime(
                    operation,
                    selectedWorkers
                );

                // Ensure the operation starts after its prerequisite is completed
                let startTime = currentTime;
                if (
                    operation.prequisite &&
                    operationTimes[operation.prequisite]
                ) {
                    startTime = Math.max(
                        startTime,
                        operationTimes[operation.prequisite].endTime
                    );
                }

                newHarmony.push({
                    operation,
                    workers: selectedWorkers,
                    startTime: startTime,
                    endTime: startTime + operationTime,
                });
                completedOperations.push(operation.id);
                currentTime = startTime + operationTime;
                operationTimes[operation.id] = {
                    startTime: startTime,
                    endTime: startTime + operationTime,
                };

                // Remove completed operation from prerequisites of remaining operations
                remainingOperations = remainingOperations.filter(
                    (op) => op.id !== operation.id
                );
                remainingOperations.forEach((op) => {
                    if (op.prequisite === operation.id) {
                        op.prequisite = "";
                    }
                });
            }
        }

        let newEvaluation = evaluateHarmony(newHarmony);
        if (newEvaluation.totalTime < bestEvaluation.totalTime) {
            bestHarmony = newHarmony;
            bestEvaluation = newEvaluation;
        }

        harmonyMemory.push(newHarmony);
        harmonyMemory.sort(
            (a, b) =>
                evaluateHarmony(a).totalTime - evaluateHarmony(b).totalTime
        );
        harmonyMemory = harmonyMemory.slice(0, HMS);
    }

    return bestEvaluation;
}
const fs = require("fs");
// Run the Harmony Search algorithm
let result = harmonySearch();
fs.writeFileSync(
    "best_schedule.json",
    JSON.stringify(result.workerSchedules, null, 2)
);
fs.writeFileSync(
    "total_time.json",
    JSON.stringify({ totalTime: result.totalTime }, null, 2)
);
fs.writeFileSync(
    "total_cost.json",
    JSON.stringify({ totalCost: result.totalCost }, null, 2)
);

console.log("Best Schedule:", result.workerSchedules);
console.log("Total Time:", result.totalTime);
console.log("Total Cost:", result.totalCost);

// Print the work schedule of each worker
for (let workerId in result.workerSchedules) {
    let schedule = result.workerSchedules[workerId];
    console.log(`Worker ${workerId} Schedule:`);
    schedule.schedule.forEach((task) => {
        console.log(`Operation: ${task.operation.name}`);
        console.log(`Start Time: ${task.startTime}`);
        console.log(`End Time: ${task.endTime}`);
        console.log(`Operation Time: ${task.operationTime} hours`);
    });
    console.log(`Total Time: ${schedule.totalTime} hours`);
    console.log(`Total Cost: ${schedule.totalCost} USD`);
    console.log(`Products Completed: ${schedule.productsCompleted}`);
}

// Print the total time spent on each operation
let operationTimes = {};
for (let workerId in result.workerSchedules) {
    let schedule = result.workerSchedules[workerId];
    schedule.schedule.forEach((task) => {
        if (!operationTimes[task.operation.id]) {
            operationTimes[task.operation.id] = 0;
        }
        operationTimes[task.operation.id] += task.operationTime;
    });
}

console.log("Total Time Spent on Each Operation:");
for (let operationId in operationTimes) {
    console.log(
        `Operation ${operationId}: ${operationTimes[operationId]} hours`
    );
}

// Write the operation times to a file
fs.writeFileSync(
    "operation_times.json",
    JSON.stringify(operationTimes, null, 2)
);
