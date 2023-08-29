import { getBestPlayer } from "./app";
import { getAllPlayers } from "./service";

jest.mock("./service", () => ({
  getAllPlayers: jest.fn(),
}));

describe("getBestPlayer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the best player", async () => {
    const mockPlayers = [
      { name: "Player1", score: 100 },
      { name: "Player2", score: 150 },
      { name: "Player3", score: 75 },
    ];

    getAllPlayers.mockResolvedValue(mockPlayers);

    const bestPlayer = await getBestPlayer();

    expect(bestPlayer).toEqual({ name: "Player2", score: 150 });
  });

  it("should empty the player", async () => {
    const mockPlayers = [];
    getAllPlayers.mockResolvedValue(mockPlayers);
    expect(getBestPlayer()).toBeUndefined;
  });
});
