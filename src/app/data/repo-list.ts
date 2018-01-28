import { Repo } from '../model/repo.model';

export const repoList: Repo[] = [
    new Repo('crypto-wallet-copay', 'https://github.com/campflex/crypto-wallet-copay.git', false),
]

export const sampleRepoList: Repo[] = [
    new Repo('HyperLedger Fabric Sample Applications', 'https://github.com/hyperledger/fabric-samples.git', true),
    new Repo('HyperLedger Composer Sample Applications', 'https://github.com/hyperledger/composer-sample-applications.git', true),
    new Repo('Ethereum Sample Applications', 'https://github.com/ethjs/examples.git', true),
    new Repo('Ethereum Android sample', 'https://github.com/p-acs/ethereum-android-sample.git', true),
]