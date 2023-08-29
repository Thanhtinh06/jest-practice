import { getBestPlayer } from "./app";
import { getAllPlayers } from "./service";

jest.mock("./service", () => ({
  getAllPlayers: jest.fn(),
}));

describe("getBestPlayer", () => {
  it("should return the best player", () => {
    const players = [
      { name: "Player 1", score: 50 },
      { name: "Player 2", score: 75 },
      { name: "Player 3", score: 60 },
    ];

    getAllPlayers.mockReturnValue(players);
    const bestPlayer = getBestPlayer();
    expect(bestPlayer).toEqual({ name: "Player 2", score: 75 });
  });

  it("should handle an empty player list", async () => {
    getAllPlayers.mockResolvedValue([]);
    expect(getBestPlayer()).toBeUndefined;
  });
});
