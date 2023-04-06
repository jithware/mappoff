'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/web": "4325f9a92e090b6b3ed70d27b537c5c9",
".git/refs/heads/master": "be12101ce6b14c9277eb32a2366c7e7e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/web": "4325f9a92e090b6b3ed70d27b537c5c9",
".git/refs/remotes/origin/master": "be12101ce6b14c9277eb32a2366c7e7e",
".git/objects/pack/pack-7fc1619543a37c272ddb17025e11697f0560ab51.pack": "f9b53276978e1a45abd99139e2974982",
".git/objects/pack/pack-7fc1619543a37c272ddb17025e11697f0560ab51.idx": "b689696857f9a3228aaa169afe467593",
".git/objects/a4/a6a73adfeb2985ef85e64507bd1e15ec8c8089": "174726420a0560653b09b12c2080ddba",
".git/objects/a4/0827af2f484fa36773f304051ba7e978ca4540": "7c3978870e93c106210774f4c09507b8",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/d557f4994569f454a5a069808237325a8cdef8": "5ac99b10ffcb1b37e939362a70fbb166",
".git/objects/1a/a0cf91812702ea32736738a98ef658d4529f96": "dd1f48805d6924ae40eee0d444b71316",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/130097ec25c4d8cc94fc6f1069a15c68b75ad7": "a939da0dd262a5c2451aaccbefbd139e",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/9d6602aa9f872cee1359aebb00df368aa18cbb": "5e57bc8c9fe387e29ddccdfcddb058c2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/d6e5167b112696e7946cc0c2ed115a8952a254": "72869094cae0d7986f893233307859c8",
".git/objects/2b/b755d845678731042f403d9a9ac5161ea97c9a": "c94797e4c1347c6343a26305d488c6b9",
".git/objects/fc/7317198d10c4e7550304205b8293b750478b83": "1653cf19e4c316d5f61d2f8b1530ff7a",
".git/objects/fc/c44abe2ced9430a65a098c2b3c5f956e760c06": "8b7725490ebf30c123229a49df08ce73",
".git/objects/fc/335d4efdda8b247d8a5e1101dab0d49790efe4": "b6a01e50ae452d2b2d6e730f1739b1ff",
".git/objects/84/aa9919a4abd9fc333a7558ac0e4b432d9a9ce5": "663a0ff2ce64e106c4be86ba4f65490b",
".git/objects/0d/a3b4e18c7182a4897c5d3f4ba936412a82dc46": "a33b0e478eb277c9a915d50e6785c024",
".git/objects/0d/5dbcdc72fb90a587e80e6a0e49b9d8b36a0f56": "5439a4facb1994d497d68eda35c7f241",
".git/objects/04/e0d0a8d81d708be15ca125ff6d27ef2397f79f": "6cb15d9a44e7276e8822df26112dcf99",
".git/objects/04/051441372e38829933ffa62fd04653b08210d9": "4f889198cdc17a9f9b372be4bbd1aa2f",
".git/objects/04/2361e0a60ac3078c728dcc4c06084abd8449b8": "fe24b1a36d14114e0fa8e04f375b0be2",
".git/objects/04/2bf5d19b23d4647f4162e0d2145a2fee11d289": "709e055775fa2945e41d283fe4b2b049",
".git/objects/04/6a19b0dc18ee52073c80b12d172c36853f9846": "563b3fea5a74920ac00be246264a4bd1",
".git/objects/54/43cbb896ad6bab38bac1eeaf588b9664429e71": "3fa78e9b544042f3207c4363504543c0",
".git/objects/81/6db87060ba667dcd717ed4af2a0b13a9907808": "075bc30eafca113e208030488c4fc292",
".git/objects/81/1d7d66f53f0cd12af2a5662a6a47b742aafec3": "3472b050033e9d01a9743a72ef54ac2e",
".git/objects/81/435124cb7a37e76308a24ed8e343a95d774275": "9ada92933230928d8d1129dabdd24f1f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/b22288feb71b67bb4e10444fa192ececa90cd2": "9575d0a6012db0cf7d592c5344a7a939",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/a83aba8af287688b51abee45cdd4743cd7a968": "4e8336a638cf6f7d7ae48d98cf4384f5",
".git/objects/e5/5d46efa46ab8912f87aa957675e4c2f082697d": "fd82c07ceacbf793423848ee5443e63d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a7/29866ef86bf56c89d1fd34113d6e404cd2ebd3": "c846727bcddb05dfa174f46bf937f1fe",
".git/objects/5d/e041f39e49cfec6559d1fade65a504f55bf2f8": "52563896744a508ea69fa4a267ae8d7c",
".git/objects/5d/71b873608e0fd67ecbd7c330e4bfbd0babd521": "29b8cd7364ba8a52084a87c10aeef114",
".git/objects/1e/484e6b33625c3bf47b9adbd020a6f6e960e294": "2bf6ad84d36cfdfa7d2f96e5313df5df",
".git/objects/f3/5b10ff26037c5f146c855e49c483a18c7a9024": "bb981da94fef52dc089bc84e004412ad",
".git/objects/ff/1cb8e157263167a20f7867c0e26af6a6e1b8f3": "55a94f596ca73107ed05272797682d81",
".git/objects/ff/d39c3d03e3b807632d24e8f7d27c6e815fb190": "d091a424803abf42c99925014a245163",
".git/objects/ff/81170fd2a2e96121ce43d3a11d6bb916e498a8": "56152f73fa145ea96bee0afe19830e3c",
".git/objects/ff/43bb254774a25ee2b8e4e543409088e771c014": "ca87cb7b85fab85529a23b142664c203",
".git/objects/28/ed45382776e2f408952714bc89f70065c4b1d5": "4d1fb4b54347b28bd4b29eb49c03bd83",
".git/objects/32/93289126c2d99a3e58b08dc8c05d2cbd459382": "99ed9aa85b69d7d4d1d93bbbef325b8c",
".git/objects/32/f19d3a5ca56f790f061606ae56d85a74523a26": "5a6856b2542d3d6ed84981b1ca9741a0",
".git/objects/5f/c212c3f4f3fccca78c7f1c08beb1ebcaa6ff17": "d2ceee89977dfba270bffe0749381d9f",
".git/objects/5f/eeedbe2983fd0081eb3cc6077bafa4b73760ed": "420ca81627416702e3a87fd552a1d108",
".git/objects/5f/511a464bf4529044cb1f7e506d471d37b4a31c": "c52426ac530ad6bdcff83af4d2bf33eb",
".git/objects/07/a7f86ba6cfa28a15a8edebbe40baabbbb0c17e": "fd4f7cc4ad15166d95d7c56fa23864d7",
".git/objects/ab/78469dc6350078ba14d07fcc485a3674fe72ea": "1a2936e5b7d3fc6b71c7d12dd2ca0298",
".git/objects/ab/0054bf6a237c945f1efc2940788b304296c2b6": "f6414842bc68d7afc92ad3ac93d51210",
".git/objects/43/50e90afb4486638934bcf43b2d33b8072aa883": "3d9e95321cdd460c0873a918642e07b8",
".git/objects/43/5f6033e693248fdcc20b9445dbc39fb391c810": "d26bf687504d26b619bd711b79be68ec",
".git/objects/31/31a5fb234cf77f2a18452a0a24c941f0f69564": "b780fae8bf133a893f33db363c1c5e3b",
".git/objects/31/324381573a08b35818c64bb0adfd531546cc9c": "6e94494d5559affc911fda0a51ef9a1d",
".git/objects/31/b9f01718fe777ad71191d9139d21df97505eaa": "ae235f5deb11e880ef8d8cf92ebc0cd4",
".git/objects/aa/6b0b2d9d8528be25f613c2d6dd54ae3987b7fa": "83f2139016909c325c01ac25d08c5401",
".git/objects/aa/4e62a178b55d42ed069117322a8bbcc0834110": "71c8340d6df21d87076d7179bc279b05",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/a1/bf4346c6523902fdfc50c539b69393356e03da": "599db5302f87290522ec517c8d429be6",
".git/objects/a1/2870cf349128d3123bbe988453e19a7dbc59a2": "5171cacf9c14ef7d862bf555bc9fa4a6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/78/1c27cf5ef572c1c52498e2064887e946fa6e7e": "6a0fbc7555a60d0e677166c40a3b249e",
".git/objects/15/1f55a98801e79aa998ddf976e763f7bc5d6e66": "3965489487256f099afdca51fee8deb4",
".git/objects/96/b452cf8148b7ebe162d0b21a52c0d6c3c33074": "c989583d7051038b04094c720bb2b1b7",
".git/objects/74/6a4d15489b3ced36827ed1c106d761df25fbb1": "82c523ff970867cc7df9937d5b7cb101",
".git/objects/2a/a75d1ecac1dd5bee42c01709e721b3bba75cd1": "5bf84dbbb2f317185da10f1b1867b3aa",
".git/objects/d7/b94cd28cc0cbdb2a0cfe59c8fcd30dced4bd39": "b918f6c8d241bda3c96d9de211281952",
".git/objects/10/34df1daade7ce315efe49a058d149b064deda7": "9834c1d58a7b72bfed7bd4a0fe045066",
".git/objects/fa/aceb331ee8be65dff7fb0729fc70f828657162": "48e78603e0fea7765180f49951189572",
".git/objects/fa/e59973b06732440780d25d938564c46b4294ae": "19c87afd391c91b8e13b16bb3d57a2fc",
".git/objects/fa/33697ace600ea47c7adbcdf7715821cdff0eea": "f66d4b78c9e0fa7969058fe6cc158652",
".git/objects/65/ec9c67394b374b2f4f9b12e106e84ca29554cd": "3c9371a976e1a2656a8c4d1a1ac455a2",
".git/objects/b4/66c40f910ef1fdbad66b53fcc8dcdca1312e28": "78a5a5daa7cff8eda3bcc7b5c5d00b98",
".git/objects/49/d24374ed2d5a627bc91c11fef2ab6b2484f56d": "2ed7ea66e4fea0c8ae3a0706ee0cbd73",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/c8/71a043e0b028d314465042070ac541f2bd595c": "cd7f20c0460b18d51e7a2e40aeb9b586",
".git/objects/c8/2dcf1186d800a6daa151fa84c3e5f2c3a6be88": "f63cfbc6783e5ef0a7f6be0a03566d05",
".git/objects/c8/a0f1f8f1d70a4dce3e00a0f349fb6ded17c621": "4b4bbd2a2d9a36e96f409bf5d0d18ace",
".git/objects/e7/e97a0ee581f838c71893037c933dbc01cdb9a6": "b4496fd2bc95a160d41c983a32799121",
".git/objects/e7/079d6535512471b431580cd7f7578cfae17e18": "590f4962ba1aa8aa0fd528ad38dac94d",
".git/objects/e7/4108fde9b3a647cf8c2c1d4f80eff1bec5fe87": "0ff94ddf8c0975bf16cf1b8884c81171",
".git/objects/9f/7a0ab40e9924240d78ed1c77d176621c3334f6": "cfdceebe04ebd55ff41264ce60a0d26a",
".git/objects/f6/ff4db1bfdd4221f41b809c17b0ff6c03f9b8f2": "294ae6b8cd03a485116ca2f43037b842",
".git/objects/f6/8b72a1d6e2b8339edbe3825a126b1a2cb0b898": "8cd3f3555eac8ab1702224bc11230dca",
".git/objects/df/19b9b26b734425131063e151e966123558bb6c": "96899eeb66bd24c8c684448987ae4399",
".git/objects/a5/911024adc8a7718915b78f367a1fb3031c6765": "094e3c28ef9a94cddd20bca4b8facf83",
".git/objects/b6/1a33d819be7bbdbd8fcba1eb2bc5a1ac4475a5": "16bcfaa536233433fbd85e2fe611a7cb",
".git/objects/b6/fbfa199199db358815d20c2bcafd99dbf56479": "0bc0a930454d13cc20a275c6389915c2",
".git/objects/f7/3c5f2a8d1a2c5bcee1a0b3cabb63d31579fbb5": "6a69794c78a2ec284b0f7f29c39c1746",
".git/objects/5c/6188c7bc58b443614256269943d0f0ca5e3705": "c66fef07a55611bc63289f513030304b",
".git/objects/b3/96c2e73222a55459e1c994d2218960e57ed932": "9a5e030214781c1a911a57a8c54f5630",
".git/objects/b3/9d006ad5cb61aa2f633de4a60587814b1c0a4b": "0d80e9746ce2b74b508cf5554719d002",
".git/objects/4c/0083549a4d7a38d4cf42a52a2af5bf249317dd": "305600f27d8571797800f73b3ca22315",
".git/objects/4c/3e62bed1b31a1aef17e7a7ee148b4d769b9775": "2bd5c3778c441acf07b2de977a3e61dc",
".git/objects/58/4c223d7367bebfb4185a197c83b4ce9e012698": "0f892207a24b0b4aaa06ccdbbed4afc2",
".git/objects/e2/80ef1505b21d9373b76fc2d04a2c26cd45d49e": "ff796f25f82ab65c0a0580828a12a307",
".git/objects/e2/b254c8d6e40c723e324262ced9f361de06d37a": "474e318590e091bcb984c64d633107c7",
".git/objects/89/8138f17bd01aad2d50cda3dd906809ea02938f": "60c3e6d997a1e83989014ca6cd893fe1",
".git/objects/89/12f3a694e36946958ffffcd7de85be950b5c8e": "90ab2ac362542b7facd751a3c9b0519d",
".git/objects/98/5ee0542dce8d7b374ebfd278b3f1edcc1d7da2": "f23bf66dfb79fc8eb62631439f63028e",
".git/objects/46/93b26437655f54f23568e5ebf66198891e0949": "7a7818c763dce4183fe355b8f6b63d5a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/9d/a8d49bae9af0fbf2aacf4ff17b7892e84468e6": "323f9fdbe97dabb98a240c7a7185c6e3",
".git/objects/9d/8c3c0bcb3f13464f5749d5f54e003ac57e89aa": "8bf46d2638643d9c48c8fba98b09a389",
".git/objects/9d/13846ade9e0c066d324cc048130e5f054d94bd": "58e89be722be309b9c34d0887b600da0",
".git/objects/c2/43c8f2ea1ad621fb6c35c519c693028f8f3164": "1996822dfef7252e23f7b7e52e2d08ae",
".git/objects/48/c327959a724b8384e36467ada18aadb8eebc4c": "3913f8b53adf2927205415fa35f1a0ea",
".git/objects/48/ee5e0f36025068eac459237e1944f3304b8e32": "5316ff2889a6685746cd38ed03c04032",
".git/objects/e6/9b773466fe39e494162ed143899b440fbd4c30": "948261fc8a335e70d6b8863dc3ed6be2",
".git/objects/12/76858e6ec072596739a674a7aa0889935098d7": "58502fab717f7ed7b3e4623d4b64d8db",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/c7/3feed302e6903ecefea36ca123620f7f5129b4": "f946ae564ca9b69aa9abdbf227696c85",
".git/objects/83/aeed5456dc869c8e7257507a0954eb728ff28d": "9ebabd30e9b94272564b20fdfe09bd2f",
".git/objects/37/96a15ef5def986bae75404cd419638d156fc4e": "d1bab5864e4a6ae8eb7c5621e6f59cf0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/1a35964a8a89a050225015b03597d9d1b8b9f5": "5615aebcb8356d1c2de0ddead8e7ef32",
".git/objects/57/8ab5f130585fec40024262dda36962a78b956b": "1db751f2cfb87f9d981807bd7ad02431",
".git/objects/57/71e82d8341e8b0042b429496d5a90b93b837e6": "e9d90a8fe86d1f5d28be58e77dda0b12",
".git/objects/f1/ffbfc0722a0952e1a89f8da363dbf92f6fa654": "13c70cadc5daf0eb2dce82f3e5ac62ba",
".git/objects/f1/492a64f0e6e87b3466a4da75e286f14e3078cf": "0cf96276eebb80d1f60e7a89f64eb5c7",
".git/objects/d9/7347db7d04a421e97429aeed48226322234c29": "92d5b085b6bca2e0d5b9702a974f4ba6",
".git/objects/d9/123103caf37cf1c2ae2a88cfe06dcaf3049d8f": "b4787c08844e1de3ced39bbcdfc2feb8",
".git/objects/d9/f29fedd5dd25b1c8ce077c54954300c30fc711": "31b47d8b7c87a25de016f015a94a0ffd",
".git/objects/7f/e0131091cadcf13e6f526887b958b7c62d0def": "61d283ebb8c615c106bb59c18b07d5c1",
".git/objects/c4/21d81d317452d409bdec417561d47df4766969": "fef3af148300dcee684cdc8663c00c61",
".git/objects/64/0027ec4c853594c3710fb58a80076e2eaf03f6": "a79e4856a5cb5a848496090389021ce6",
".git/objects/79/941038ba95a400f7ba5abccc45c433d008f405": "6a6f48624c0f2a40a10c9b13b47c716e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/aa4f24651db975bead73a8782936f8d8ab9206": "753dec0da19fa8791274f6c2ea4c017c",
".git/objects/cf/546f1cbc3203d590e3351034665ac5770d1caa": "cbbfa60538c053836c81de8c2ecd3e5d",
".git/objects/cf/61d7ac208caece301cc679b3a93fc00848a21f": "05aef7e6d9bb909ce554ff53958b7df8",
".git/objects/ef/ee8359bbe2971032389a8c18bd78143057a5a6": "d1230af90f8879646747b1bc9f880256",
".git/objects/18/5fc476844ba7e106eb156967c00b8c313e1666": "99465804559044dcc645b95069a5da8e",
".git/objects/18/e4be29578b2cd5e19f77b81eb0ae4ea3f5239b": "b32da81916959734827a06aec3bb4495",
".git/objects/0b/651d370f45f85bbb34f434d486c0458b66aa49": "244c65e6d96278b6c9a5fbad954993ea",
".git/objects/0b/99744cbd4925a54e27b083f5b67dacef39357c": "534579dfe8b6ac2b121d5d8f46b1f770",
".git/objects/2f/11a65d81a4d7854af4105e0d0a49df1b015180": "7b1fc91639037ee660db389a3e7090a5",
".git/objects/30/3f9752b1d8b807a7ae14ea8b0c0c799c23e02c": "b19af45be32f04ade407dc1d545a14d1",
".git/objects/4f/8d40444ee4e7086b194971ed4df4560f6d9b7b": "679fc8112efe6aa423da6d7c66e2ffe2",
".git/objects/4f/b1cea51ac0d7de76fec2b5abe648b2ac0fbdcc": "4a6348b92ffa744f7212b679aac5e062",
".git/objects/7b/c55d40f5e65e67d6f5ec2ecd7135889dff4a89": "c5859a9a8ae2132139856e6b28fc8ee5",
".git/objects/71/7bedff8dc9561d305157bd0ffcc8283d389dcc": "7b92ea18c839c6fc86716260e35b54f7",
".git/objects/71/dfcc132621efeb50a99efdc767f5ae7b52efec": "9741b88e8782657ed06f6420769e613e",
".git/objects/71/466b12c19a8683e4d3ffb7bb3d0a8c573aaf12": "e1b5b29e3fd09f0d171a89786a99aece",
".git/objects/c0/7a2119b1576f8d0d32a7e1dae277fa8956f7a1": "76aaf8449d492a48c652775fc25d4a68",
".git/objects/59/4b021246e1bae63a280472d0f9bcd407a3f33b": "1f82bd6e2740a46449ad42ca2ffa6241",
".git/objects/22/140e6f70fc71b3d31124f292f17253fb962190": "92f2e756d8cbcc9adfcd99aca9e2122f",
".git/objects/34/1621e35a52554a4f14d28e1c752433870896cb": "27c48e9992feee8c8613639fc5e75b3d",
".git/objects/34/a948b2e3f33f498c6248dc020443c46b71b002": "c637065a97057120a2c305b9fb95af86",
".git/objects/4e/a8b65d0dd742cd95e9657df07f4c4b2d053464": "5b05d919b5d9ffab3e65329841dcfce3",
".git/objects/39/3daab6d6ca3e90fe56efe53c9307f9e4bf50c6": "d03a6ee0242961f32382d7c28c200e42",
".git/objects/39/249a2ff2b377588b4aff6d25e3408c0f0875b0": "b1a63675a6d32ccae6147ab31a1aac25",
".git/objects/69/0a56de39aa1b434a5ae0ba0b2096b2cefc6e5e": "0ced6f0223fae8dd756c26350fe7c8d0",
".git/objects/69/8096e7e30be245dd82df455544faa5e93de0fa": "ba5050b363f5eab1a2cb323f253597ee",
".git/objects/76/765602b6e97be036c3c511705e71348103cd22": "a13925232f9cc6467e9d3c11109934fa",
".git/objects/45/a1e1fc60cb86bd235ee69aba3799f483480287": "442ce4907bf40c93f049dbaa734f50e1",
".git/objects/fb/6f7b3dc1aa44e94ef84bf8e278230f17226237": "aefadc805beb8806c29d96df7b56f2df",
".git/objects/fb/652b48d40f31880ce6d4e9d4408787f38ecd7b": "7c755e4d71c30662370fd6f209178768",
".git/objects/51/cf90de72ef93aba4eace31d9a7515a9547500b": "81e19b778bece471c5776adb436f3817",
".git/objects/a2/84fd675080dee6b036b5df5989d616069a3b91": "c0b9f250039be8e57efa43557055502c",
".git/objects/47/2b17e618030aa0d9b6bc4659dc9580c7c1269a": "9cf12f9eec951470893766d91650fb4e",
".git/objects/23/ea5fbb88acb758cb5735c87c6e55e6051a0ea1": "1b1b0548627eb6454aa20922cc66f555",
".git/objects/d2/76ccd1c5dfd40aa2f76b17bd0b0e29c657d31b": "fb248755f10d614f45a2dba6fda316d0",
".git/objects/75/9815c41f8f3559886efa10cbba80feda73c700": "be51ab029099b12efcc22d9cc725cc8b",
".git/objects/f0/63bbb66362c5726c88160d7f5dcaafefa5084c": "102f6cefd0c1553613aaad1e44d6c499",
".git/objects/02/9917b50f05ddc172658b9617e30e9c52a8c9b4": "098e505cf6949ee03034047d5156461e",
".git/objects/eb/6b6ef5ee60d59e1e835e0b23152aaae009ab48": "3fbcac4f2b2841bdcb336e4bbc6fb3f7",
".git/objects/eb/916f421652c847c16a23753fa53f6defa73286": "e173aa8a989616988fc67674906e0fa2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/01b1e07ec5224cba5765ed8d95cb4370456bb5": "7e069b96e919190c02e60be73d7f99b8",
".git/objects/ca/a801817a100a69c4071c87f0f211f2f9d9d734": "641199c89395c29dc1df8fbb1fe2a7a7",
".git/objects/c9/14e785527a09f132bf6cdc990d1a9ca25b9b75": "6d9e4ffcb6b3419e9883f4656c049399",
".git/objects/44/5d77115bebda76bf453e43ad26529d35dc5db1": "48321df9d3e5f400df116d84da0c258c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/bf/6ab77f08fd745695ad97a51671d218b9d47bf1": "7f3f992ab7708248320944a6e0ae8e13",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7a/d3fc9db88688ee3e20d071211b22581c6a2ac3": "6c29d1107ab1b9da1e289ad231fee360",
".git/objects/85/f10e6ca14b75c4f196e925773a93a723a8c77c": "352bd5a1eae30cf5e0bfb183395fe114",
".git/objects/3b/700915075d7a625d954fd07752679da96191ba": "a710d241e91b9741380adeaedfc03031",
".git/objects/3b/52946e5e8cd9708920e68f52f9eb68c0b39778": "89e384c0d83cde74ceea7a87b953c15a",
".git/objects/bd/4a10e818ffe24eaf5603a1baa0af8ab649e7a3": "4c67015ffab8e1a3cf2bcf39c6eb4e96",
".git/objects/b7/b33549dab55898c0832bacb2870bd5a35deb60": "dc7310b6d6aec06b5ab5aab276cc352e",
".git/objects/b7/b6b5c423ebbf38b8e0847560931dce83112a73": "e7d495989a6e8bbcbdf9e4f1b38c28ed",
".git/objects/b7/99be2c8a139433fd01e6466b102c4a5b3a1928": "c6415478f45c153829b3227b51426932",
".git/objects/92/db9e3c36e1d144155fbba711ccc1b37db10bfa": "735e2a32cbbd7e24b95f5e32829ab206",
".git/objects/92/ee701b005b5b25382c320908aab8ea8dbd67fa": "1d864745860d7bc169aa2bcd8e694edb",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/e4/d31ebbd11232dbc335b11ee98704577fb48b59": "5f6e4a71a51932058407be80d847602f",
".git/objects/4d/3b8335c2c71408a293bbf4a27fedccbb4045d8": "4becce97f0e606724602581df8c70781",
".git/objects/61/a8fcc7528b3330264e8da71290920ba42ccf66": "a14137b04955db1b32dc207c459703fe",
".git/objects/1f/749a5c92203c204726f9ccefb4981815462f08": "d3d0522d9a98ea7c89f0bfe132ec6462",
".git/objects/1f/b7e99c69f351e3a18e8cff738fe748d1c591d2": "8801bf8dfebd8c64732d49a2687a077b",
".git/objects/1f/963e6e5c78423ec6832429cb9a06497a0185f2": "cd5de65767a05fe7fd8bcec6aaebd53a",
".git/objects/67/c7acc43f19cf1386a969ff241375d9761b11a8": "0770fb85d55b5d9633c552021f6f1093",
".git/objects/a9/d90710713de8850a85d6c98000d952fa2756cb": "d7da4e9a63011428b739ff0dfaaee850",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/3a/8e5d529abbb7a228355b774ad33c416f5a9fcb": "35a5fdf610be4053e9be415d8163f978",
".git/objects/80/56e8c329f91044ee554bb454d2abcb3ec29a6b": "4d4e973e9db8e4c7a541ca0439d76fba",
".git/objects/db/2587048fc1b1e8389ef27d720505d7a829396e": "f323c58955792385e3f71ab3f72037c1",
".git/objects/7e/3ac84f315c7e4ec830c983022c33f0a26ceb21": "0555419cd3cb8ca5905f726876ec3338",
".git/objects/3e/dfef8f32632b5a61e9ea9c23595a388795c0d2": "31eb2337e9626f95a009d56154a10c7b",
".git/objects/3e/98cc9595540e0be5b749d25e39031bf4395756": "76182c20b64f89a8286116bc698c0ddf",
".git/objects/cd/ec2b8b4bad1d1de2d41ca2966389725ef28084": "1bc81032ebc2270c38ddb647da534b71",
".git/objects/25/ab7842ddfa61524d8555d3ecb1b678b5dc9f4d": "b4a2c7766ed89065f84f8f9dd92bd309",
".git/objects/d1/f37b6d4413e5a2e9245851e39804c2ad00e954": "13ab17beacb7b6cf951956c0191fbee7",
".git/objects/b8/3bea351ce8e95adbf371ea05e7b2960dacc85b": "a8fcdb95b8008b384b4dec9b7101c9dc",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/3202f013ac5acef0fffa600d6c7c46deb07a22": "1fc63387583dc607d0ab337f8c6f565a",
".git/objects/3c/f10508dd9f59c80b56b6a97a9fbe7498a71a0c": "f60d2896a079d51a3c2b801209d5a56e",
".git/objects/3d/ab51775d4bb048dc26bc01d76f92157fc1dca6": "233ede6496ddcd0e42d2c0699cfbfe87",
".git/objects/ec/d5992e47f8af302932ae117b604d250297fb02": "e8c8c987dc43b2dca71e8c821ee7324e",
".git/objects/16/35709361277580961fb3d2981ba925bcb6a0f2": "e9f542480550dfd2f0b4988f566d2400",
".git/objects/b9/b7b07958a671e49dbd1dcf7835d4afa708815a": "df8c7e002dba4d799f5a6fcdf0843c7f",
".git/objects/6f/5f5dfd4edc142976c2ec222447af3dbed572d9": "f724f800676bbeb0dfac544e76205a95",
".git/objects/21/23bb3d85ee25a8f03e66955c43960bf6b09599": "91c2b9f81ee9cf8fb02e58bd1f86657c",
".git/objects/bc/d331492ab8db72a06e4585776973ded6895036": "54e225cafce1f0d6faccfcde0e62d104",
".git/objects/99/a1729bdc6df88e6922940602737a394700cdcd": "ba77971cfb1ca606eada67527fc6ec11",
".git/objects/ee/562b1b68bde48a049aaa537dd4de1b62af93dc": "ade1f7a5d197ada219ff75ef7e67586a",
".git/objects/ee/889666ef01553b9e643877900de8289c38171f": "1475431772b35a29025b1bbdaabe6247",
".git/objects/2e/d941e994497d6b832b2a6d23ef6c3e0d5735ea": "d53ea86b418b081e9055379afef3a35b",
".git/objects/11/095ac69b675a55c0375049ff7cc89243e4c47e": "8af935d9fe5b61278ee5dac0416fccb3",
".git/objects/94/05eba2001549d2a25792d76c7382745491335e": "3d410fd70c794350cbfd011d8add4853",
".git/objects/70/614bd044647f444de1ab18d508cab9e925d0d1": "71eac9a4070cce7ce4816ec9d0b92693",
".git/objects/70/a33247270d592d4474b3173cbac468a444dc8e": "7e9ea43f08e2aa492a76204e9b4e14cc",
".git/objects/9c/1d8029d9ce439e11c339943cea8c99433325f4": "a6f5b0e5d674d8cc44406ff1f537fbf1",
".git/objects/8e/cfbd1e75eece3538f065ba7d00a4ee8495a142": "ab1eb92bbbf4e20d35f56c11e19d24be",
".git/objects/33/fb4dd104579662d1ce9ca5183d67de7b7650db": "db046e2d4468cab0792a36369b0362fe",
".git/objects/2c/c09c55ff0339318c8703ad8c109fe376ceb578": "075b20e495b6e0cc814d3df26143b493",
".git/objects/14/09e1334d8890b4fd17fe00bc81e9e46ce02095": "fbc6ffe5658b24f1e535565d10cf6b86",
".git/objects/9b/a9e8375aade11fd54ac992242def7cdf48b10b": "7d1d96583e59f779ebc9ebe5ce7e8e42",
".git/objects/ea/d5478698598b9198fcab060da93f92090a7513": "58c3112500160a225329751c418cfb3f",
".git/objects/8a/d0f618b0c7a4e49ca37caf082a4db4b3d5ce4f": "a9c23e61862a4deb8bddd45f4958a21f",
".git/objects/b0/b04f57df63949c26c088c7fca0c6f8ad249bbd": "a1aaca6c60f26f8fe71173447ff4306a",
".git/objects/ce/efa54bca1b10d0bd4c04810afac129ae6d349e": "e070c82e87812eb90dde4115cdefa9b2",
".git/objects/e9/f8c4bdc8a52d931d65719ef781d8fdfa29d76c": "26620381eb7340457fd0bb0ac2052a34",
".git/objects/36/367bbfef265c0301fd3b044428324296e868e4": "52a963fe4215cc3d01c2b964ae660b4f",
".git/objects/36/269d47c3de8256083d0b6b13efeee864a2fa98": "0edfadebe4fff8ea216c862ad9342967",
".git/objects/6c/b1eeb8d8f366629a2012db465e481fe2290d96": "021350b869ce60f8c38f2e0ea37632ad",
".git/objects/4a/d4ed533a77159e5535435fc43d615091554380": "9d219db466d8b70d665b20f6e0377809",
".git/objects/35/8145c1da6fa9e782381e0c216161f7eb1d74a5": "1cb906bb57cd873a3461f94b18d563bc",
".git/objects/27/8f11b8e3d4ce53bc76aaaedf1b14e2f379d51c": "457c8c0c1f3d15a82caaf620b412ebf6",
".git/objects/95/eeb6298b66cde9fec2dae2982757a5a2d04f90": "2e7f45ecb1d945b8fcdcf76b4b3de4ac",
".git/packed-refs": "92cbcac84738a9bdbdda928e921a4bb8",
".git/logs/refs/remotes/origin/HEAD": "2d7f6dc95c4b5aeb8226e6e938460f4c",
".git/logs/refs/remotes/origin/web": "25bcbc199d6e36f7e100d13d920c65a1",
".git/logs/refs/remotes/origin/master": "8871f67b859e89fda47f534befaa65ae",
".git/logs/refs/heads/master": "7bf57e990cd54c4f2499647a2f8a2574",
".git/logs/refs/heads/web": "9fcf50512480e9bfd52579aa3125b8b3",
".git/logs/HEAD": "ce697c9700bff36aa5c16f3be6d7dce8",
".git/config": "16fd5f673a4245fbb3c58a9977e2df58",
".git/COMMIT_EDITMSG": "8a6d7c5e193f7493f22ace347f7756bd",
".git/FETCH_HEAD": "1cb8304a2a6140e356c2c5c1722fdaef",
".git/ORIG_HEAD": "be12101ce6b14c9277eb32a2366c7e7e",
".git/index": "9946bd906def46c926c43f0ca6667d25",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
"LICENSE": "bcdb43c50b21cc0ecd1f4e039fc1ed70",
"assets/kml/american-discovery-trail.kml": "237531910f2d28c5eed05c89469d96b2",
"assets/kml/appalachian-trail.kml": "d1d1fab549d2d213775a7a1d306713ac",
"assets/kml/arizona-trail.kml": "a4a9c1f7d8d744399056c0ac665df69b",
"assets/kml/colorado-trail.kml": "f312c1d65e888f087c64bb792259d069",
"assets/kml/continental-divide-national-scenic-trail.kml": "43214886b430f5e95c750c4feced7a08",
"assets/kml/empty.kml": "3f8fc0d3fb9224b83abc5f2a8ab7a5ad",
"assets/kml/florida-national-scenic-trail.kml": "7a24c1d6ea131cc0b3ffde0d8e3d5014",
"assets/kml/long-trail.kml": "3e06d2e267b54de7db5d961257f93ed7",
"assets/kml/north-american-pacific-crest-trail.kml": "0e8e721da23858671562d03f109a0c3a",
"assets/kml/sample.kmz": "cda81559ba3fa705005c6a97969035eb",
"assets/AssetManifest.json": "d33d7866249cc31ffb68a25326a9936f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "003eafedd047cf740cb634963cbc97b2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/icons/auto-fix-high.png": "19c8c8b85d42808d2ca2d4d66c33dceb",
"assets/icons/auto-graph.png": "18841108529474b9d8e9b0d7195d5b0d",
"assets/icons/bus.png": "cad4ee9a5fefbda72a1d5d5d909be964",
"assets/icons/camping.png": "7441376c1f75465ad396fb1e599b3fc7",
"assets/icons/dangerous.png": "ec5b3fe50e7c4634a75a80ce1ca33573",
"assets/icons/details.png": "9a196eef1d7d281fa10598bd67daf7ce",
"assets/icons/forest.png": "1d13901123b6d95d57b16cee5e38fcb2",
"assets/icons/gite.png": "4e91290dc21a294c8fe22c186f61cdb0",
"assets/icons/hiking.png": "44b44859991ac748d4dcbc2c29b55fe2",
"assets/icons/home.png": "ae4dfb4f5f73f4ca684ab733358828bf",
"assets/icons/hotel.png": "c1e7f24732bb6cc7500e86c21ef42152",
"assets/icons/info.png": "3ccb661b631cac04fd9e2f9e8e2da219",
"assets/icons/local-fire-department.png": "cd80d4db910f9514e956f0f0f0885cf9",
"assets/icons/local-parking.png": "c51c668843e4dded19252c86fdc58b23",
"assets/icons/park.png": "6a64a8d15191b80f1e613bad30202128",
"assets/icons/place-blue.png": "b50a8512330336ae24b87b0fcaac8ff6",
"assets/icons/place-green.png": "619b2344e8b1bcb2a97c37d35a2e0850",
"assets/icons/place-grey.png": "9a92795c2a0c8f88af9b3a4b4ec5d6cd",
"assets/icons/place-red.png": "2736365010ce44ac49060d1af9f90d85",
"assets/icons/pool.png": "9775f9c7ca93d17050cd13a947d36b11",
"assets/icons/restaurant.png": "8c030850dcb6c220f2a852570c0ad07b",
"assets/icons/shopping-cart.png": "666f1bcce86023c6bca6d14c7a579c52",
"assets/icons/shower.png": "d1228a8b4aee22c253e2f4f6bedc2dcc",
"assets/icons/terrain.png": "2d629f404bf1cc01ab38f3d14febcc5e",
"assets/icons/warning.png": "ca4b417528dcd0eb15a5595ed12adab4",
"assets/icons/water-drop-outlined.png": "3ea35d3bff8ab1f2996f18812d2d3666",
"assets/icons/water-drop.png": "a3e639ebaf438144a30e0873878745e4",
"assets/icons/water.png": "ef0e3bbe81cec8b53ceaa1ae5172c4c8",
"assets/icons/wc.png": "79aa46bb83fb9297923c34b6d9654ff1",
"assets/images/about.png": "9c78ba62584705010b886aeabdb792e4",
"assets/images/github-qr.png": "cd2e1d587ba070aa913c2ad59640fb01",
"assets/images/github-readme-qr.png": "2d7154f6608fcde1973551017054ee73",
"assets/images/launcher.png": "7230be55205d612125328de924663b05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "2147963e04ef3991e7988a822e50fac3",
"assets/thumbnails/american-discovery-trail.png": "f210f86645af7242deea40bbe0dcd84a",
"assets/thumbnails/appalachian-trail.png": "06eaa77ce604303d7e8b285c898fd7f2",
"assets/thumbnails/arizona-trail.png": "73937e694166587a4b076b5e644c4173",
"assets/thumbnails/central-california.png": "19f2d3f2e27efc51dd7875165093736b",
"assets/thumbnails/colorado-trail.png": "14f4847a1a96626808ad53cdc29fedd7",
"assets/thumbnails/continental-divide-national-scenic-trail.png": "cb7329fe41d152ded33c4d9820187464",
"assets/thumbnails/florida-national-scenic-trail.png": "b7286327bf562c134e8d9bd67d6f1f9d",
"assets/thumbnails/long-trail.png": "91255fae4d7441fdd82b9a426a507d3c",
"assets/thumbnails/modis-fire.png": "e2067b79f7626880e82199cfe93c36f9",
"assets/thumbnails/north-american-pacific-crest-trail.png": "77d9eb052a714220afbac546d0c2debe",
"assets/thumbnails/northern-california.png": "157f2ec81a43dfd73fec130421754a4c",
"assets/thumbnails/oregon.png": "bd1615f7e7e1f3e5006396f010c33afd",
"assets/thumbnails/southern-california.png": "0466b879814a980a506821c6c7dbe284",
"assets/thumbnails/washington.png": "c9e8abc268266e5c4286e732c9dec9a6",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "428494e79d329529c7bef3b6d84c576b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "3db6da041f26a85effda05d3f6a90d25",
"icons/Icon-512.png": "8fe73e0ca049c2f92643a76fd34f4164",
"index.html": "0828599e0c16e6308ba6907852f7db46",
"/": "0828599e0c16e6308ba6907852f7db46",
"main.dart.js": "57e6a549dd55c1114389888d2d69694d",
"manifest.json": "51a91ae769bcfa4c0e4ae1ef64877aea",
"version.json": "2b8d250ffb72b636bd9c46c688d4334f",
"README.md": "b0ce2151985e5e28c4f2d55f2726c961"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
