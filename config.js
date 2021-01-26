// @ts-check

const config = {
    endpoint:"https://localhost:8081",
    key: "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==",
    databaseId: "Data",
    containerId: "FlightsData",
    partitionKey: { kind: "Hash", paths: ["/flight"] }
  };
  
  module.exports = config;