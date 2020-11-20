"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const async_1 = require("./async");
ava_1.default('getABC', async (t) => {
    t.deepEqual(await async_1.asyncABC(), ['a', 'b', 'c']);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXN5bmMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUV2QixtQ0FBbUM7QUFFbkMsYUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLGdCQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQyJ9