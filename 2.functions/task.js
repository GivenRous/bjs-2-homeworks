function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i=0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
    avg = sum / arr.length;
  };

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
};

function summElementsWorker(...arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };

  return sum;
};

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
	let max = -Infinity;
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    };
  };

  diff = max - min;
  if (diff === -Infinity) {
    return 0;
  } else {
    return diff;
  };
};

function differenceEvenOddWorker(...arr) {
  sumEvenElement = 0;
  sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    };
  };

  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		} else {
			return 0;
		};
	};
  
	if (sumEvenElement !== countEvenElement) {
		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	};
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  };

  return maxWorkerResult;
};