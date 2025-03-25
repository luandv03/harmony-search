function initializeHarmonyMemory() {
    let harmonyMemory = [];
    for (let i = 0; i < HMS; i++) {
        let harmony = [];
        let completedOperations = [];
        let remainingOperations = [...operations]; // Create a copy of operations

        while (remainingOperations.length > 0) {
            let availableOperations = remainingOperations.filter((op) =>
                arePrerequisitesCompleted(op, completedOperations)
            );
            if (availableOperations.length === 0) break;

            for (let operation of availableOperations) {
                let availableWorkers = workers.filter(
                    (worker) => worker.position === operation.requiredPosition
                );
                let selectedWorkers = [];
                while (availableWorkers.length > 0) {
                    let worker = availableWorkers.splice(
                        Math.floor(Math.random() * availableWorkers.length),
                        1
                    )[0];
                    selectedWorkers.push(worker);
                    if (Math.random() > 0.5) break; // Randomly decide how many workers to assign
                }

                let operationTime = calculateOperationTime(
                    operation,
                    selectedWorkers
                );

                harmony.push({
                    operation,
                    workers: selectedWorkers,
                    operationTime,
                });
                completedOperations.push(operation.id);

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
