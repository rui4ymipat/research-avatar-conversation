const {
  CommunicationIdentityClient,
} = require("@azure/communication-identity");
const {
  CommunicationRelayClient,
} = require("@azure/communication-network-traversal");

const main = async () => {
  // This code demonstrates how to fetch your connection string
  // from an environment variable.
  const connectionString =
    "endpoint=https://apex23s.asiapacific.communication.azure.com/;accesskey=zEtlbatLS9lnIZE0mdNEe+T54+muYxsmx7noKy6FapmjSb4Yb2AjbQUKa2tiRG50haGBe138drf3l1Co6AZ6oQ==";

  // Instantiate the identity client
  const identityClient = new CommunicationIdentityClient(connectionString);
  let identityResponse = await identityClient.createUser();
  console.log(
    `\nCreated an identity with ID: ${identityResponse.communicationUserId}`
  );
  const relayClient = new CommunicationRelayClient(connectionString);
  console.log("Getting relay configuration");

  const config = await relayClient.getRelayConfiguration(identityResponse);
  console.log("RelayConfig", config.iceServers);
};

main().catch((error) => {
  console.log("Encountered and error");
  console.log(error);
});
