const productionOrder = {
  id: "LSX0001",
  name: "Sản xuất áo sơ mi",
  quantity: 30000,
  limitTime: 1000000,
};

// Các công đoạn cần thực hiện trong từng quy trình
const operations = [
  {
    id: "OP001",
    productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
    name: "Cắt vải may áo sơ mi",
    quantity: 30000,
    requiredPosition: "Nhân viên cắt vải",
    taskType: "T001",
    prevOperation: [],
  },

  {
    id: "OP002",
    productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
    name: "May áo sơ mi",
    quantity: 30000,
    requiredPosition: "Nhân viên may",
    taskType: "T002",
    prevOperation: ["OP001"], // Cắt vải
  },

  {
    id: "OP003",
    productionOrderId: "LSX0001", // ID của đơn hàng sản xuất
    name: "Đóng gói áo sơ mi",
    quantity: 30000,
    requiredPosition: "Nhân viên đóng gói",
    taskType: "T003",
    prevOperation: ["OP002"], // May áo
  },
];

const workers = [
  // Công nhân cắt vải
  {
    id: "W001",
    name: "Nguyễn Văn A",
    position: "Nhân viên cắt vải",
    productivityKPI: 80, // Số lượng hoàn thành / thời gian hoàn thành (chiếc / giờ)
    qualityKPI: 1, // (Số lượng đạt chuẩn / Số lượng hoàn thành)*100%
    efficiencyKPI: 0.95, // (Số lượng hoàn thành / Số lượng cần bàn giao)*100%
    salaryPerHour: 5, // Lương theo giờ
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
const assets = [
  {
    id: "A001",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 10,
    productivity: 0.96,
  },
  {
    id: "A002",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 12,
    productivity: 0.93,
  },
  {
    id: "A003",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 11,
    productivity: 0.94,
  },

  // Máy may
  {
    id: "A009",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 10,
    productivity: 0.96,
  },
  {
    id: "A010",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 12,
    productivity: 0.93,
  },
  {
    id: "A011",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 11,
    productivity: 0.94,
  },

  // Máy đóng gói
  {
    id: "A017",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 10,
    productivity: 0.96,
  },
  {
    id: "A018",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 12,
    productivity: 0.93,
  },
  {
    id: "A019",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 11,
    productivity: 0.94,
  },
];
function calculateCostAndTime(solution, operation) {
  const { quantity } = operation;
  let totalCost = 0;
  let totalTime = 0;
  let totalProductivityPerHour = 0;
  let totalCostPerHour = 0;
  for (const pair of solution) {
    const { worker, asset } = pair;

    // Tính năng suất sản xuất mỗi giờ
    const productivityPerHour =
      worker.productivityKPI * worker.qualityKPI * asset.productivity;
    totalProductivityPerHour += productivityPerHour;

    // Tính chi phí sản xuất cho cặp này
    const costPerHour = worker.salaryPerHour + asset.costPerHour;

    totalCostPerHour += costPerHour;
  }
  totalTime = quantity / totalProductivityPerHour;
  totalCost = totalCostPerHour * totalTime;
  return { totalCost, totalTime };
}

function generateRandomSolution(operation, workers, assets) {
  const solution = [];
  const availableWorkers = [...workers]; // Tạo bản sao danh sách nhân viên
  const availableAssets = [...assets]; // Tạo bản sao danh sách máy móc

  // Lọc nhân viên và máy móc phù hợp với công việc
  const filteredWorkers = availableWorkers.filter(
    (worker) => worker.position === operation.requiredPosition
  );
  const filteredAssets = availableAssets.filter(
    (asset) => asset.taskType === operation.taskType
  );

  // Đếm số lần mỗi máy đã được sử dụng
  const assetUsageCount = new Map();

  // Ghép cặp người-máy
  while (filteredWorkers.length > 0) {
    const workerIndex = Math.floor(Math.random() * filteredWorkers.length);
    const worker = filteredWorkers[workerIndex];

    let asset;
    do {
      const assetIndex = Math.floor(Math.random() * filteredAssets.length);
      asset = filteredAssets[assetIndex];
    } while ((assetUsageCount.get(asset.id) || 0) >= 3); // Đảm bảo máy chưa được sử dụng quá 3 lần

    // Cập nhật số lần sử dụng máy
    assetUsageCount.set(asset.id, (assetUsageCount.get(asset.id) || 0) + 1);

    // Thêm cặp worker-asset vào solution
    solution.push({ worker, asset });

    // Loại bỏ nhân viên đã được gán khỏi danh sách
    filteredWorkers.splice(workerIndex, 1);
  }

  return solution;
}

function harmonySearch(
  operations,
  workers,
  assets,
  maxIterations,
  harmonyMemorySize,
  limitTime
) {
  // Khởi tạo Harmony Memory
  let harmonyMemory = [];
  for (let i = 0; i < harmonyMemorySize; i++) {
    const solutions = [];
    let totalCost = 0;
    let totalTime = 0;

    for (const operation of operations) {
      const solution = generateRandomSolution(operation, workers, assets);
      if (solution.length === 0) {
        continue;
      }

      const { totalCost: cost, totalTime: time } = calculateCostAndTime(
        solution,
        operation
      );

      solutions.push(solution);
      totalCost += cost;
      totalTime += time;
    }

    // // Chỉ thêm giải pháp nếu thỏa mãn giới hạn thời gian
    if (totalTime <= limitTime) {
      harmonyMemory.push({ solutions, totalCost, totalTime });
    }
  }

  // Sắp xếp Harmony Memory theo chi phí tăng dần
  harmonyMemory.sort((a, b) => a.totalCost - b.totalCost);
  const HMCR = 0.8;
  const PAR = 0.3;
  // Lặp qua các thế hệ
  for (let iteration = 0; iteration < maxIterations; iteration++) {
    const newSolutions = [];
    let totalCost = 0;
    let totalTime = 0;

    for (const operation of operations) {
      if (Math.random() < HMCR) {
        // Chọn ngẫu nhiên từ Harmony Memory
        const randomSolution =
          harmonyMemory[Math.floor(Math.random() * harmonyMemory.length)];
        let selectedSolution =
          randomSolution.solutions[operations.indexOf(operation)];

        // Áp dụng Pitch Adjustment với xác suất PAR
        if (Math.random() < PAR) {
          selectedSolution = adjustSolution(
            selectedSolution,
            workers,
            assets,
            operation
          );
        }

        newSolutions.push(selectedSolution);

        // Tính toán chi phí và thời gian cho giải pháp đã chọn
        const { totalCost: cost, totalTime: time } = calculateCostAndTime(
          selectedSolution,
          operation
        );
        totalCost += cost;
        totalTime += time;
      } else {
        // Tạo ngẫu nhiên
        const solution = generateRandomSolution(operation, workers, assets);
        const { totalCost: cost, totalTime: time } = calculateCostAndTime(
          solution,
          operation
        );

        newSolutions.push(solution);
        totalCost += cost;
        totalTime += time;
      }
    }

    // Đánh giá giải pháp mới
    if (totalTime <= limitTime) {
      harmonyMemory.push({ solutions: newSolutions, totalCost, totalTime });

      // Sắp xếp lại Harmony Memory và giữ kích thước cố định
      harmonyMemory.sort((a, b) => a.totalCost - b.totalCost);
      if (harmonyMemory.length > harmonyMemorySize) {
        harmonyMemory.pop();
      }
    }
  }
  return harmonyMemory[0];
}
function adjustSolution(solution, workers, assets, operation) {
  const adjustedSolution = [...solution];
  const randomIndex = Math.floor(Math.random() * adjustedSolution.length);

  // Đếm số lần mỗi máy đã được sử dụng trong solution
  const assetUsageCount = new Map();
  adjustedSolution.forEach((pair) => {
    const assetId = pair.asset.id;
    assetUsageCount.set(assetId, (assetUsageCount.get(assetId) || 0) + 1);
  });

  // Tìm máy móc mới chưa được sử dụng quá 3 lần
  let newAsset;
  do {
    newAsset = assets[Math.floor(Math.random() * assets.length)];
  } while (
    (assetUsageCount.get(newAsset.id) || 0) >= 3 || // Máy đã được sử dụng 3 lần
    newAsset.taskType !== operation.taskType // Máy không phù hợp với công việc
  );

  // Thay thế máy móc mới vào cặp tại vị trí randomIndex
  adjustedSolution[randomIndex] = {
    worker: adjustedSolution[randomIndex].worker, // Giữ nguyên nhân viên
    asset: newAsset, // Gán máy móc mới
  };

  return adjustedSolution;
}
// Tham số đầu vào
const maxIterations = 1000;
const harmonyMemorySize = 10;
const limitTime = productionOrder.limitTime;

// Chạy thuật toán Harmony Search
const bestSolution = harmonySearch(
  operations,
  workers,
  assets,
  maxIterations,
  harmonyMemorySize,
  limitTime
);

// Kết quả

function transformSolutionOutput(bestSolution, operations) {
  const transformedOutput = [];

  bestSolution.solutions.forEach((operationSolution, operationIndex) => {
    const operation = operations[operationIndex];
    const machines = {};

    // Gom nhóm nhân viên theo máy
    operationSolution.forEach(({ worker, asset }) => {
      if (!machines[asset.id]) {
        machines[asset.id] = {
          machine: asset,
          workers: [],
        };
      }

      machines[asset.id].workers.push(worker);
    });

    // Xử lý từng máy sau khi đã gom nhóm
    Object.values(machines).forEach((machineGroup) => {
      const { machine, workers } = machineGroup;

      // Tính tổng năng suất của các nhân viên làm việc trên máy
      const totalWorkerProductivity = workers.reduce(
        (sum, w) => sum + w.productivityKPI * w.qualityKPI,
        0
      );

      // Tính năng suất tổng cộng mỗi giờ của máy
      const totalProductivityPerHour =
        totalWorkerProductivity * machine.productivity;

      // Tính số ngày cần thiết để hoàn thành công đoạn
      const daysRequired = Math.ceil(
        operation.quantity / totalProductivityPerHour / 24
      );
      // Tạo mảng schedule ngẫu nhiên cho nhân viên với điều kiện không làm 2 ca liên tiếp
      const usedShiftsPerDay = Array.from(
        { length: daysRequired },
        () => new Set()
      ); // Tập hợp các ca đã được sử dụng cho từng ngày

      for (let dayIndex = 0; dayIndex < daysRequired; dayIndex++) {
        // Tách nhân viên có prevShift là 3
        const workersWithPrevShift3 = [];
        const otherWorkers = [];

        workers.forEach((worker) => {
          if (dayIndex > 0 && worker.schedule[dayIndex - 1] === 3) {
            workersWithPrevShift3.push(worker);
          } else {
            otherWorkers.push(worker);
          }
        });

        // Gán ca cho nhân viên có prevShift là 3 trước
        workersWithPrevShift3.forEach((worker) => {
          let shift;
          do {
            shift = Math.floor(Math.random() * 2) + 2; // Ngẫu nhiên giữa 2 và 3
          } while (usedShiftsPerDay[dayIndex].has(shift)); // Đảm bảo không trùng ca trong cùng ngày

          usedShiftsPerDay[dayIndex].add(shift); // Đánh dấu ca đã được sử dụng trong ngày
          if (!worker.schedule) {
            worker.schedule = [];
          }
          worker.schedule[dayIndex] = shift;
        });

        // Gán ca cho các nhân viên còn lại
        otherWorkers.forEach((worker) => {
          let shift;
          do {
            shift = Math.floor(Math.random() * 3) + 1; // Ngẫu nhiên từ 1 đến 3
          } while (usedShiftsPerDay[dayIndex].has(shift)); // Đảm bảo không trùng ca trong cùng ngày

          usedShiftsPerDay[dayIndex].add(shift); // Đánh dấu ca đã được sử dụng trong ngày
          if (!worker.schedule) {
            worker.schedule = [];
          }
          worker.schedule[dayIndex] = shift;
        });
      }

      // Thêm số ngày làm việc vào máy
      machine.workedDays = daysRequired;
    });

    // Đưa vào cấu trúc kết quả
    transformedOutput.push({
      operation: {
        id: operation.id,
        name: operation.name,
        quantity: operation.quantity,
        requiredPosition: operation.requiredPosition,
      },
      machines: Object.values(machines), // Chuyển từ object sang array
    });
  });

  return transformedOutput;
}
const fs = require("fs");

// Chuyển đổi cấu trúc dữ liệu
const transformedOutput = transformSolutionOutput(bestSolution, operations);

// Ghi kết quả ra file JSON
fs.writeFileSync(
  "output_transformed.json",
  JSON.stringify(transformedOutput, null, 2),
  "utf-8"
);

console.log("Kết quả đã được ghi vào file output_transformed.json");
