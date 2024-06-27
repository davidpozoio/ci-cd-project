import { Op, WhereOptions } from "sequelize";
import { Where, WhereOperator } from "../respository/respository";

const convertWhereToSequelize = <T>(where?: Where<T>): WhereOptions<T> => {
  if (!where) {
    return {};
  }
  const whereOptions: any = { ...where };

  for (let key in where) {
    const whereOperator = where[key] as WhereOperator;
    if (whereOperator.like) {
      whereOptions[key] = {
        [Op.like]: whereOperator.like.value,
      };
      continue;
    }

    if (whereOperator.search) {
      whereOptions[key] = whereOperator.search.value;
      continue;
    }
  }

  return whereOptions;
};

export default convertWhereToSequelize;
