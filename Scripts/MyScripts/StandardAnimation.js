var matrixPool = new Array();
var isMatrixEnd = false;
var isPoolEnd = false;
var currentRowIndex = 0;
var currentColumnIndex = -1;
var pageCurrentRowIndex = 15;
var pageCurrentColumnIndex = 20;
var binaryMatrixArray = new Array();

function calculatePageStartIndex() {

}

function initMatrixPool() {
    matrixPool.push("0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0810,0810,0810,1020,1020,2244,7efc,0408,0810,1020,2040,7efc,0000,0004,fffe,0000-0080,4044,2ffe,1008,03fc,0208,0a08,1208,23f8,e248,2040,2150,224c,2444,2940,0080-0110,3ff8,0820,0444,fffe,0010,1ff8,1010,1ff0,1010,1ff0,0200,5184,5092,9012,0ff0");//丝丝凉意
    matrixPool.push("1040,1040,20a0,20a0,4910,fa0e,1404,23f8,4000,f808,43fc,0208,1a08,e208,43f8,0208-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080-0920,0928,7ffc,0920,0920,7ffe,4102,8104,1ff0,1110,1110,1110,1110,1150,1120,0100-0100,0100,0108,7ffc,0100,2110,1930,0944,fffe,0380,0540,0930,311e,c104,0100,0100"); //给你带来
    matrixPool.push("0008,3ffc,2100,2208,2ffc,2808,2ff8,2808,2ff8,2080,4490,8988,0900,2894,2812,47f2-0080,4040,3048,17fc,0010,0210,f120,10a0,1040,1040,10a0,1110,1210,2806,47fc,0000-1ff0,0100,7ffe,4102,9d74,0100,1d70,0108,3ffc,0008,0008,1ff8,0008,0008,3ff8,0008-1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e"); //愿这雪能
    matrixPool.push("7ffc,0200,1ff0,1010,1ff0,1010,1ff0,1010,1ff0,0800,0ff0,1420,2240,4180,0660,381c-0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,1010,1010,1010,1010,1ff0,1010,0000-0008,3ffc,2108,2108,3ff8,2108,2108,2108,3ff8,0100,0108,7ffc,0100,0104,fffe,0000"); //夏日里
    matrixPool.push("0000,0000,0000,0000,0000,0000,0004,fffe,0000,0000,0000,0000,0000,0000,0000,0000-0100,0100,0100,0100,0100,0100,0100,0280,0280,0280,0440,0440,0820,1010,200e,4004");//一人
    matrixPool.push("0004,fffe,0080,0080,0100,0100,0340,0520,0918,110c,2104,4100,0100,0100,0100,0100-0100,0100,0280,0440,0820,1010,2fee,c004,0010,3ff8,0200,0200,0440,0820,1ff0,0010-0008,7c3c,07c0,0a10,1290,1290,1690,1a90,3290,d290,1290,1290,14a8,15ee,5824,2000-1010,0820,0448,3ffc,2108,2108,3ff8,2108,2108,3ff8,2100,0104,fffe,0100,0100,0100");//不会孤单
    matrixPool.push("1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080-0200,0100,0000,1f00,0108,0118,7da0,0540,0540,0920,0920,1110,210e,4104,0500,0200-0010,43f8,3000,1000,0008,07fc,f120,1120,1120,1124,1224,121c,1400,2806,47fc,0000");//你永远
    matrixPool.push("0080,7848,4ffc,5000,5110,50a0,6004,57fe,4808,4bfc,6a08,5208,4208,4208,43f8,4208-0840,0840,0a48,1150,1040,37fc,3040,5040,9044,1ffe,1040,1040,1040,1040,1040,1040-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//陪伴你
    matrixPool.push("1010,0818,0420,0448,7ffc,0100,0100,0104,fffe,0100,0280,0280,0440,0830,300e,c004-0200,0100,0080,00c0,0880,0800,2808,2804,2802,4802,8802,0800,0810,0810,07f0,0000-0820,0448,7ffc,0100,3ff8,0200,fffe,0410,0ff8,1810,2ff0,c810,0ff0,0810,0ff0,0810-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//关心着你
    matrixPool.push("0120,7fb0,4928,6b20,5d24,7ffe,0820,7f20,0820,0f20,7820,0550,5550,5488,910e,0204-0120,7fb0,4928,6b20,5d24,7ffe,0820,7f20,0820,0f20,7820,0550,5550,5488,910e,0204-0040,2040,2240,2240,2248,227c,fbc8,2648,2248,2248,2268,2250,3a42,e202,41fe,0000");//默默地
    matrixPool.push("0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-0100,0100,0280,0440,0820,1010,2fee,c004,0010,3ff8,0200,0200,0440,0820,1ff0,0010");//我会
    matrixPool.push("0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-1008,11fc,1108,ff08,11f8,3108,39f8,5508,9108,11f8,0000,1200,5184,5092,9012,0ff0-0000,2208,1110,10a0,03f8,0208,f208,1208,13f8,12a8,10a0,10a0,1522,1922,121e,0400");//我想说
    matrixPool.push("1040,1040,2244,7f7e,4284,4304,4204,4284,7e64,4224,4204,4204,4204,7e04,4228,0010-0100,0104,fffe,0100,3ff8,2108,3ff8,0100,3ff8,0108,fffe,0108,3ff8,0108,0500,0200");//的事
    matrixPool.push("0fe0,0820,0820,0fe0,0820,0820,0fe0,0004,fffe,0100,0920,09f0,0900,1500,2306,40fc-1ff0,1010,1ff0,1010,1ff0,0004,fffe,2200,3ffc,2284,3e88,2250,3e20,e258,028e,0304-0100,0110,3ff8,0100,0104,fffe,0820,0450,3ff8,0100,0108,7ffc,0100,0100,0100,0100-0010,43f8,3000,1000,0008,07fc,f080,1080,1100,1120,1210,17f8,1008,2806,47fc,0000");//是最幸运
    matrixPool.push("0010,0010,0010,fc14,07fe,0410,4810,2910,1090,1090,2810,2410,4410,8010,0050,0020-0480,0ea0,7890,0890,0884,fffe,0880,0890,0a90,0c60,1840,68a0,0920,0a14,2814,100c-0100,0100,0108,7ffc,0100,2110,1930,0944,fffe,0380,0540,0930,311e,c104,0100,0100-0000,2208,1110,10a0,03f8,0208,f208,1208,13f8,12a8,10a0,10a0,1522,1922,121e,0400");//对我来说
    matrixPool.push("1080,1088,2498,44a0,fec0,0284,7c84,447c,7c00,4488,4498,7ca0,44c0,4482,5482,487e-0040,4040,3040,1040,0040,0040,f0a0,10a0,10a0,1110,1110,1510,1a08,1208,0406,0804-2008,13fc,1208,0208,0208,f208,1208,1208,13f8,1208,1000,1520,1910,1208,0404,0804-1100,1100,1100,23fc,2204,6408,a840,2040,2150,2148,224c,2444,2040,2040,2140,2080");//能认识你
    matrixPool.push("0000,4004,2ffe,2040,0040,e080,2080,21a0,2298,248c,2884,2080,2080,5006,8ffc,0000-1000,11fc,1004,1008,fc10,2420,2424,27fe,2420,4420,2820,1020,2820,4420,84a0,0040-0010,0bf8,7c10,4910,4910,4910,4910,4914,49fe,4804,4824,7ff4,4804,0004,0014,0008");//还好吗
    matrixPool.push("1ff0,1010,1ff0,1010,1ff0,0004,fffe,2200,3ffc,2284,3e88,2250,3e20,e258,028e,0304-0008,401c,33e0,1200,0200,0208,f3fc,1220,1220,1220,1220,1420,1020,2820,4406,03fc");//最近
    matrixPool.push("0100,1100,1100,1108,3ffc,2100,4100,4100,8110,3ff8,0100,0100,0100,0104,fffe,0000-0010,1ff8,1010,1010,1010,1010,1010,1ff0,1010,1010,1010,1010,1010,1ff0,1010,0000-1080,1080,1080,1088,5bfc,5488,5088,9088,1088,1ffe,1080,1140,1120,1210,140e,1804,0020,00f0,1f00,1000,1100,1100,2104,7ffe,0100,0100,0920,0910,1108,210c,4504,0200");
    matrixPool.push("1004,11fe,1124,1124,fdfc,2500,257c,2544,2544,457c,2944,117c,2944,4644,847c,0044-0080,4088,2ffc,2100,0140,0250,e7f8,2040,2040,2048,2ffc,2040,2040,5046,8ffc,0000)
}


function start() {
    initMatrixPool();
    binaryMatrixArray = parseStrings(matrixPool.pop(), "-", ",");
    var timer = setInterval(function () {
        if (isMatrixEnd) {
            for (var i = 0; i < rowCount; i++) {
                for (var j = 0; j < columnCount; j++) {
                    var selector = "#r" + i + "c" + j;
                    $(selector).css("background-color", "#485050");
                }
            }
            if (isPoolEnd) {
                clearInterval(timer);
                popupAfter(5000);
                $.fn.snow();
            }
            else {
                var str = matrixPool.pop();
                if (typeof (str) == "undefined" && matrixPool.length == 0) {
                    isPoolEnd = true;
                    return;
                }
                binaryMatrixArray = parseStrings(str,"-", ",");
                isMatrixEnd = false;
                currentRowIndex = 0;
                currentColumnIndex = -1;
                pageCurrentRowIndex = 10;
                pageCurrentColumnIndex = 20;
                continueAnimation();

            }
        }
        else {
            continueAnimation();
        }

    }, 50);

}



function continueAnimation() {

    if (currentRowIndex == binaryMatrixArray.length && currentColumnIndex == binaryMatrixArray[0].length) {
        isMatrixEnd = true;

    }
    else {
        do {
            if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && currentColumnIndex == binaryMatrixArray[currentRowIndex].length) {
                currentRowIndex++;
                currentColumnIndex = 0;
                pageCurrentRowIndex++;
                pageCurrentColumnIndex = 21;
            }
            else {
                currentColumnIndex += 1;
                pageCurrentColumnIndex += 1;

            }
        } while (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 0);

    }
    var cellSelector = "#r" + pageCurrentRowIndex + "c" + pageCurrentColumnIndex;
    if (typeof (binaryMatrixArray[currentRowIndex]) != "undefined" && binaryMatrixArray[currentRowIndex][currentColumnIndex] == 1) {
        $(cellSelector).css("background-color", "#ffffff");
    }
    else {
        $(cellSelector).css("background-color", "#485050");
    }
}

function popupAfter(milliseconds) {
    $("#popup").css("display", "block");
    setTimeout(function () {

        $("#popup").fadeIn(3000);
    }, milliseconds);
}
