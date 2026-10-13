// 广州航海学院 2025 年广东省分科类分专业录取情况（数据来源：学校招生办官网「往年参考」）
// 组投档最低分/最低排位按该组内各专业的最低分与最低排位推导；2025 年省控线：物理类 436、历史类 464。
// 学费按学校 2026 年公布的收费标准：文史管理类 4590、理工外语类 5190、艺术类 10000、中外合作 42600 元/学年。

module.exports = [
  {
    id: '11106-101', collegeCode: '11106', groupCode: '101', groupName: '物理一组（航海类）',
    subjectReq: ['物理', '化学'], plan: 348, tuition: 5190,
    note: '航海技术、轮机工程为航海类专业，有体检与性别要求，需按学校要求核验',
    history: [{ year: 2025, rank: 142393, score: 512 }],
    majors: [
      { code: '001', name: '航海技术', plan: 153, years: 4, tuition: 5190 },
      { code: '002', name: '轮机工程', plan: 153, years: 4, tuition: 5190 },
      { code: '003', name: '船舶电子电气工程', plan: 42, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11106-201', collegeCode: '11106', groupCode: '201', groupName: '物理一组（海洋装备与智能制造）',
    subjectReq: ['物理', '化学'], plan: 1054, tuition: 5190,
    note: '组内含计算机、电气、能源等方向，2025 年录取最低分 518 分、最低排位 131794',
    history: [{ year: 2025, rank: 131794, score: 518 }],
    majors: [
      { code: '004', name: '人工智能', plan: 162, years: 4, tuition: 5190 },
      { code: '005', name: '智能海洋装备', plan: 80, years: 4, tuition: 5190 },
      { code: '006', name: '计算机科学与技术', plan: 163, years: 4, tuition: 5190 },
      { code: '007', name: '车辆工程（轨道车辆）', plan: 36, years: 4, tuition: 5190 },
      { code: '008', name: '车辆工程（汽车车辆）', plan: 38, years: 4, tuition: 5190 },
      { code: '009', name: '船舶与海洋工程', plan: 121, years: 4, tuition: 5190 },
      { code: '010', name: '工程管理', plan: 36, years: 4, tuition: 4590 },
      { code: '011', name: '邮轮工程与管理', plan: 33, years: 4, tuition: 5190 },
      { code: '012', name: '能源与动力工程', plan: 160, years: 4, tuition: 5190 },
      { code: '013', name: '电气工程及其自动化', plan: 163, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11106-202', collegeCode: '11106', groupCode: '202', groupName: '物理二组（信息与交通）',
    subjectReq: ['物理', '化学'], plan: 1201, tuition: 5190,
    note: '组内含软件工程、电子信息、机器人等专业，2025 年录取最低分 515 分、最低排位 137672',
    history: [{ year: 2025, rank: 137672, score: 515 }],
    majors: [
      { code: '014', name: '无人驾驶航空器系统工程', plan: 163, years: 4, tuition: 5190 },
      { code: '015', name: '智慧交通', plan: 156, years: 4, tuition: 5190 },
      { code: '016', name: '软件工程', plan: 163, years: 4, tuition: 5190 },
      { code: '017', name: '机械工程', plan: 156, years: 4, tuition: 5190 },
      { code: '018', name: '港口航道与海岸工程', plan: 76, years: 4, tuition: 5190 },
      { code: '019', name: '道路桥梁与渡河工程', plan: 74, years: 4, tuition: 5190 },
      { code: '020', name: '交通运输', plan: 77, years: 4, tuition: 5190 },
      { code: '021', name: '机器人工程', plan: 160, years: 4, tuition: 5190 },
      { code: '022', name: '电子信息工程', plan: 163, years: 4, tuition: 5190 },
      { code: '023', name: '物联网工程', plan: 160, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11106-203', collegeCode: '11106', groupCode: '203', groupName: '物理三组（航运管理与外语）',
    subjectReq: ['物理'], plan: 393, tuition: 5190,
    note: '文史管理类专业学费 4590，商务英语、意大利语 5190；2025 年录取最低分 515 分、最低排位 138349',
    history: [{ year: 2025, rank: 138349, score: 515 }],
    majors: [
      { code: '024', name: '法学（海商法）', plan: 42, years: 4, tuition: 4590 },
      { code: '025', name: '海事管理', plan: 52, years: 4, tuition: 4590 },
      { code: '026', name: '交通管理', plan: 40, years: 4, tuition: 4590 },
      { code: '027', name: '物流管理', plan: 40, years: 4, tuition: 4590 },
      { code: '028', name: '旅游管理', plan: 9, years: 4, tuition: 4590 },
      { code: '029', name: '金融学', plan: 50, years: 4, tuition: 4590 },
      { code: '030', name: '财务管理', plan: 15, years: 4, tuition: 4590 },
      { code: '031', name: '跨境电子商务', plan: 30, years: 4, tuition: 4590 },
      { code: '032', name: '国际商务', plan: 13, years: 4, tuition: 4590 },
      { code: '033', name: '商务英语', plan: 39, years: 4, tuition: 5190 },
      { code: '034', name: '意大利语', plan: 15, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11106-204', collegeCode: '11106', groupCode: '204', groupName: '物理四组（中外合作办学）',
    subjectReq: ['物理'], plan: 120, tuition: 42600,
    note: '中外合作办学项目，学费较高，需查看学校中外合作项目收费标准',
    history: [{ year: 2025, rank: 174104, score: 495 }],
    majors: [
      { code: '035', name: '计算机科学与技术（中外合作办学）', plan: 120, years: 4, tuition: 42600 }
    ]
  },
  {
    id: '11106-205', collegeCode: '11106', groupCode: '205', groupName: '物理五组（中外联合培养）',
    subjectReq: ['物理'], plan: 30, tuition: 42600,
    note: '中外联合培养项目，学费较高',
    history: [{ year: 2025, rank: 140457, score: 513 }],
    majors: [
      { code: '036', name: '计算机科学与技术（中外联合培养）', plan: 30, years: 4, tuition: 42600 }
    ]
  },
  {
    id: '11106-211', collegeCode: '11106', groupCode: '211', groupName: '历史一组（航运管理与外语）',
    subjectReq: ['历史'], plan: 299, tuition: 4590,
    note: '历史类考生可填报；2025 年录取最低分 536 分、最低排位 32201（历史类）',
    history: [{ year: 2025, rank: 32201, score: 536 }],
    majors: [
      { code: '040', name: '法学（海商法）', plan: 42, years: 4, tuition: 4590 },
      { code: '041', name: '海事管理', plan: 32, years: 4, tuition: 4590 },
      { code: '042', name: '交通管理', plan: 24, years: 4, tuition: 4590 },
      { code: '043', name: '物流管理', plan: 23, years: 4, tuition: 4590 },
      { code: '044', name: '旅游管理', plan: 8, years: 4, tuition: 4590 },
      { code: '045', name: '金融学', plan: 30, years: 4, tuition: 4590 },
      { code: '046', name: '财务管理', plan: 10, years: 4, tuition: 4590 },
      { code: '047', name: '跨境电子商务', plan: 18, years: 4, tuition: 4590 },
      { code: '048', name: '国际商务', plan: 9, years: 4, tuition: 4590 },
      { code: '049', name: '商务英语', plan: 39, years: 4, tuition: 5190 },
      { code: '050', name: '意大利语', plan: 15, years: 4, tuition: 5190 }
    ]
  }
];
