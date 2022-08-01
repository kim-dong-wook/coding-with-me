const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

// do it(error check);
exports.check = async (code,inputData,answerData) => {
  let sourceFile;
  try {
    sourceFile = await fs.writeFile('main.py',code);
    await fs.writeFile('./input.in', inputData);
  } catch (error) { // 파일 쓰기 실패
    console.log(error);
    return {
      time : 0,
      output : error.stderr,
      success : false
    };
  }

  try {
    let pre_time = Date.now();
    let run = await exec(`python3 ./main.py < ./input.in`);
    let cur_time = Date.now();

    try { // 사용한 파일 제거
      await fs.unlink('main.py');
      await fs.unlink('input.in');
    } catch (error) { console.log(error); }

    return {
      time : cur_time - pre_time,
      output : run.stdout,
      success : (run.stdout.trim() == answerData)
    };

  } catch (error) { // 컴파일, 런타임 오류
    console.log(error);
    try {
      await fs.unlink('main.py');
      await fs.unlink('input.in');
    } catch (error) {
      console.log(error);
     }

    return {
      time : 0,
      output : error.stderr,
      success : false
    };

  }
}