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
  {
    id: "A004",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 15,
    productivity: 0.95,
  },
  {
    id: "A005",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 10,
    productivity: 0.91,
  },
  {
    id: "A006",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 12,
    productivity: 0.94,
  },
  {
    id: "A007",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 11,
    productivity: 0.95,
  },
  {
    id: "A008",
    name: "Máy cắt vải",
    taskType: "T001",
    costPerHour: 15,
    productivity: 0.91,
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
  {
    id: "A012",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 15,
    productivity: 0.95,
  },
  {
    id: "A013",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 10,
    productivity: 0.91,
  },
  {
    id: "A014",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 12,
    productivity: 0.94,
  },
  {
    id: "A015",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 11,
    productivity: 0.95,
  },
  {
    id: "A016",
    name: "Máy may",
    taskType: "T002",
    costPerHour: 15,
    productivity: 0.91,
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
  {
    id: "A020",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 15,
    productivity: 0.95,
  },
  {
    id: "A021",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 10,
    productivity: 0.91,
  },
  {
    id: "A022",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 12,
    productivity: 0.94,
  },
  {
    id: "A023",
    name: "Máy đóng gói",
    taskType: "T003",
    costPerHour: 11,
    productivity: 0.95,
  },
  {
    id: "A024",
    name: "Máy đóng gói",
    taskType: "T001",
    costPerHour: 15,
    productivity: 0.91,
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

  // Ghép cặp người-máy
  while (filteredWorkers.length > 0 && filteredAssets.length > 0) {
    const workerIndex = Math.floor(Math.random() * filteredWorkers.length);
    const assetIndex = Math.floor(Math.random() * filteredAssets.length);

    const worker = filteredWorkers[workerIndex];
    const asset = filteredAssets[assetIndex];

    solution.push({ worker, asset });

    // Loại bỏ nhân viên và máy móc đã được ghép khỏi danh sách
    filteredWorkers.splice(workerIndex, 1);
    filteredAssets.splice(assetIndex, 1);
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
    // console.log(solutions, totalCost, totalTime);

    // // Chỉ thêm giải pháp nếu thỏa mãn giới hạn thời gian
    // if (totalTime <= limitTime) {
    harmonyMemory.push({ solutions, totalCost, totalTime });
    // }
  }

  // Sắp xếp Harmony Memory theo chi phí tăng dần
  harmonyMemory.sort((a, b) => a.totalCost - b.totalCost);

  // Lặp qua các thế hệ
  for (let iteration = 0; iteration < maxIterations; iteration++) {
    const newSolutions = [];
    let newTotalCost = 0;
    let newTotalTime = 0;

    for (const operation of operations) {
      const solution = generateRandomSolution(operation, workers, assets);
      if (solution.length === 0) {
        continue;
      }

      const { totalCost: cost, totalTime: time } = calculateCostAndTime(
        solution,
        operation
      );

      newSolutions.push(solution);
      newTotalCost += cost;
      newTotalTime += time;
    }

    // Sắp xếp Harmony Memory theo chi phí tăng dần
    harmonyMemory.sort((a, b) => a.totalCost - b.totalCost);

    // Giữ lại các giải pháp tốt nhất trong Harmony Memory
    if (harmonyMemory.length > harmonyMemorySize) {
      harmonyMemory = harmonyMemory.slice(0, harmonyMemorySize);
    }
  }

  return harmonyMemory[0];
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

const fs = require("fs"); // Import module fs

// Ghi kết quả ra file JSON
const outputFilePath = "output.json"; // Đường dẫn file JSON
const outputData = {
  bestSolution: bestSolution,
};

fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 2), (err) => {
  if (err) {
    console.error("Lỗi khi ghi file JSON:", err);
  } else {
    console.log(`Kết quả đã được ghi vào file: ${outputFilePath}`);
  }
});
