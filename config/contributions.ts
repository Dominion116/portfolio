export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "EventHorizon",
    contibutionDescription:
      "Implemented automated dividend distribution with epoch-based calculations; integrated with existing staking contract for proportional distributions; optimized gas for mass-distribution; added unit tests and documentation. Merged as PR #336.",
    repoOwner: "EDOHWARES",
    link: "https://github.com/EDOHWARES/EventHorizon/pull/336",
  },
  {
    repo: "facilpay-contracts",
    contibutionDescription:
      "Added batch escrow creation for bulk merchant operations: introduced EscrowBatchEntry and BatchEscrowResult structs, implemented batch creation functions with per-entry success/failure handling, and added comprehensive tests. Merged as PR #153.",
    repoOwner: "Facil-Pay",
    link: "https://github.com/Facil-Pay/facilpay-contracts/pull/153",
  },
  {
    repo: "SoroTask",
    contibutionDescription:
      "Implemented distributed keeper locking and RPC failover for reliability and scaling: added Redis-based distributed locking to prevent duplicate task execution, designed multi-endpoint RPC client with automatic health monitoring and weighted failover, and included comprehensive tests for concurrent keeper instances.",
    repoOwner: "SoroLabs",
    link: "https://github.com/SoroLabs/SoroTask/pull/342",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
