var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Define the function to convert currency
function convertCurrency(event) {
    return __awaiter(this, void 0, void 0, function () {
        var amount1, amount, fromCurrencyInput, toCurrencyInput, fromCurrency, toCurrency, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault(); // Prevent form submission
                    amount1 = document.getElementById('amount');
                    amount = Number(amount1.value);
                    fromCurrencyInput = document.getElementById('fromCurrency');
                    toCurrencyInput = document.getElementById('toCurrency');
                    fromCurrency = fromCurrencyInput.value.toUpperCase();
                    toCurrency = toCurrencyInput.value.toUpperCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, convertCurrencyAPI(amount, fromCurrency, toCurrency)];
                case 2:
                    result = _a.sent();
                    document.getElementById('result').innerText = "".concat(amount, " ").concat(fromCurrency, " equals ").concat(result, " ").concat(toCurrency);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('An error occurred:', error_1);
                    document.getElementById('result').innerText = 'An error occurred. Please try again.';
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to fetch exchange rates from the API
function fetchExchangeRates(baseCurrency) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://open.er-api.com/v6/latest/".concat(baseCurrency))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error fetching exchange rates:', error_2);
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to convert currency
function convertCurrencyAPI(amount, from, to) {
    return __awaiter(this, void 0, void 0, function () {
        var exchangeRates, conversionRate, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchExchangeRates(from)];
                case 1:
                    exchangeRates = _a.sent();
                    conversionRate = exchangeRates.rates[to];
                    if (conversionRate === undefined) {
                        throw new Error("Conversion rate from ".concat(from, " to ").concat(to, " not available."));
                    }
                    return [2 /*return*/, amount * conversionRate];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error converting currency:', error_3);
                    throw error_3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
document.getElementById('currencyConverterForm').addEventListener('submit', convertCurrency);
