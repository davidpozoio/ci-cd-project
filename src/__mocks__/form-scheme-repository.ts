import { jest } from "@jest/globals";
import formSchemeService from "../services/form-scheme-service";

const formSchemeRepositoryMock = {
  findAll: jest.spyOn(formSchemeService.getRepo(), "findAll"),
  findById: jest.spyOn(formSchemeService.getRepo(), "findById"),
  save: jest.spyOn(formSchemeService.getRepo(), "save"),
};

export default formSchemeRepositoryMock;
