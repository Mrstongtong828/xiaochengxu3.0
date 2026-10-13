// 演示样例院校专业组数据（非当年正式招生数据）
// subjectReq 为空数组表示不限选科；['物理'] 表示首选物理、再选不限。
// history 为组投档最低位次，仅用于演示分层，不代表专业录取位次。

module.exports = [
  {
    id: '11845-201', collegeCode: '11845', groupCode: '201', groupName: '计算机类',
    subjectReq: ['物理', '化学'], plan: 268, tuition: 6850,
    note: '不招色盲色弱；按大类招生，入学后分流',
    history: [{ year: 2025, rank: 41300, score: 571 }, { year: 2024, rank: 43100, score: 566 }],
    majors: [
      { code: '201', name: '计算机科学与技术', plan: 96, years: 4, tuition: 6850 },
      { code: '202', name: '软件工程', plan: 72, years: 4, tuition: 6850 },
      { code: '203', name: '网络工程', plan: 50, years: 4, tuition: 6850 },
      { code: '204', name: '信息安全', plan: 50, years: 4, tuition: 6850 }
    ]
  },
  {
    id: '11845-202', collegeCode: '11845', groupCode: '202', groupName: '机械与自动化类',
    subjectReq: ['物理'], plan: 210, tuition: 6850,
    note: '含机械设计制造及其自动化、自动化',
    history: [{ year: 2025, rank: 48900, score: 561 }, { year: 2024, rank: 50200, score: 557 }],
    majors: [
      { code: '205', name: '机械设计制造及其自动化', plan: 92, years: 4, tuition: 6850 },
      { code: '206', name: '自动化', plan: 68, years: 4, tuition: 6850 },
      { code: '207', name: '机器人工程', plan: 50, years: 4, tuition: 6850 }
    ]
  },
  {
    id: '11845-203', collegeCode: '11845', groupCode: '203', groupName: '管理类',
    subjectReq: [], plan: 120, tuition: 6060,
    note: '不限选科，物理与历史考生均可填报',
    history: [{ year: 2025, rank: 55400, score: 552 }],
    majors: [
      { code: '208', name: '工商管理', plan: 60, years: 4, tuition: 6060 },
      { code: '209', name: '会计学', plan: 60, years: 4, tuition: 6060 }
    ]
  },
  {
    id: '11846-302', collegeCode: '11846', groupCode: '302', groupName: '外语类',
    subjectReq: ['物理'], plan: 156, tuition: 6580,
    note: '外语类专业对英语单科成绩有要求',
    history: [{ year: 2025, rank: 33900, score: 582 }, { year: 2024, rank: 35100, score: 578 }],
    majors: [
      { code: '301', name: '英语', plan: 66, years: 4, tuition: 6580 },
      { code: '302', name: '翻译', plan: 40, years: 4, tuition: 6580 },
      { code: '303', name: '商务英语', plan: 50, years: 4, tuition: 6580 }
    ]
  },
  {
    id: '11846-401', collegeCode: '11846', groupCode: '401', groupName: '历史类语言组',
    subjectReq: ['历史'], plan: 90, tuition: 6580,
    note: '仅招历史类考生',
    history: [{ year: 2025, rank: 12800, score: 561 }],
    majors: [
      { code: '304', name: '日语', plan: 30, years: 4, tuition: 6580 },
      { code: '305', name: '汉语国际教育', plan: 30, years: 4, tuition: 6580 },
      { code: '306', name: '新闻学', plan: 30, years: 4, tuition: 6580 }
    ]
  },
  {
    id: '11078-105', collegeCode: '11078', groupCode: '105', groupName: '理工类',
    subjectReq: ['物理'], plan: 412, tuition: 6230,
    note: '含计算机、电子信息方向',
    history: [{ year: 2025, rank: 52800, score: 557 }, { year: 2024, rank: 54100, score: 553 }],
    majors: [
      { code: '101', name: '计算机科学与技术', plan: 120, years: 4, tuition: 6230 },
      { code: '102', name: '电子信息工程', plan: 96, years: 4, tuition: 6230 },
      { code: '103', name: '土木工程', plan: 100, years: 4, tuition: 6230 },
      { code: '104', name: '建筑学', plan: 96, years: 5, tuition: 6230 }
    ]
  },
  {
    id: '11078-201', collegeCode: '11078', groupCode: '201', groupName: '师范类',
    subjectReq: [], plan: 180, tuition: 5610,
    note: '不限选科',
    history: [{ year: 2025, rank: 48600, score: 562 }],
    majors: [
      { code: '105', name: '汉语言文学（师范）', plan: 60, years: 4, tuition: 5610 },
      { code: '106', name: '数学与应用数学（师范）', plan: 60, years: 4, tuition: 5610 },
      { code: '107', name: '英语（师范）', plan: 60, years: 4, tuition: 5610 }
    ]
  },
  {
    id: '10590-150', collegeCode: '10590', groupCode: '150', groupName: '计算机与软件类',
    subjectReq: ['物理', '化学'], plan: 300, tuition: 6850,
    note: '热门组，分数较高',
    history: [{ year: 2025, rank: 27800, score: 596 }, { year: 2024, rank: 28900, score: 592 }],
    majors: [
      { code: '151', name: '计算机科学与技术', plan: 140, years: 4, tuition: 6850 },
      { code: '152', name: '软件工程', plan: 100, years: 4, tuition: 6850 },
      { code: '153', name: '人工智能', plan: 60, years: 4, tuition: 6850 }
    ]
  },
  {
    id: '11540-108', collegeCode: '11540', groupCode: '108', groupName: '经济与管理类',
    subjectReq: [], plan: 320, tuition: 5510,
    note: '不限选科',
    history: [{ year: 2025, rank: 55600, score: 551 }, { year: 2024, rank: 57200, score: 547 }],
    majors: [
      { code: '111', name: '金融学', plan: 110, years: 4, tuition: 5510 },
      { code: '112', name: '会计学', plan: 110, years: 4, tuition: 5510 },
      { code: '113', name: '国际经济与贸易', plan: 100, years: 4, tuition: 5510 }
    ]
  },
  {
    id: '11819-118', collegeCode: '11819', groupCode: '118', groupName: '电子信息类',
    subjectReq: ['物理', '化学'], plan: 240, tuition: 5710,
    note: '含中外合作办学方向，学费另行说明',
    history: [{ year: 2025, rank: 62000, score: 541 }],
    majors: [
      { code: '121', name: '电子信息工程', plan: 90, years: 4, tuition: 5710 },
      { code: '122', name: '通信工程', plan: 80, years: 4, tuition: 5710 },
      { code: '123', name: '光电信息科学与工程', plan: 70, years: 4, tuition: 5710 }
    ]
  },
  {
    id: '11819-206', collegeCode: '11819', groupCode: '206', groupName: '计算机类',
    subjectReq: ['物理'], plan: 180, tuition: 5710,
    note: '',
    history: [],
    majors: [
      { code: '124', name: '计算机科学与技术', plan: 90, years: 4, tuition: 5710 },
      { code: '125', name: '数据科学与大数据技术', plan: 90, years: 4, tuition: 5710 }
    ]
  },
  {
    id: '13902-101', collegeCode: '13902', groupCode: '101', groupName: '软件与网络类',
    subjectReq: ['物理'], plan: 300, tuition: 34000,
    note: '民办院校，学费较高',
    history: [{ year: 2025, rank: 96000, score: 486 }],
    majors: [
      { code: '131', name: '软件工程', plan: 120, years: 4, tuition: 34000 },
      { code: '132', name: '网络工程', plan: 90, years: 4, tuition: 34000 },
      { code: '133', name: '数字媒体技术', plan: 90, years: 4, tuition: 34000 }
    ]
  },
  {
    id: '13667-102', collegeCode: '13667', groupCode: '102', groupName: '商科类',
    subjectReq: [], plan: 260, tuition: 32000,
    note: '民办院校，学费较高',
    history: [{ year: 2025, rank: 108000, score: 471 }],
    majors: [
      { code: '141', name: '工商管理', plan: 90, years: 4, tuition: 32000 },
      { code: '142', name: '市场营销', plan: 80, years: 4, tuition: 32000 },
      { code: '143', name: '旅游管理', plan: 90, years: 4, tuition: 32000 }
    ]
  },
  {
    id: '10558-501', collegeCode: '10558', groupCode: '501', groupName: '计算机类（综合改革）',
    subjectReq: ['物理', '化学'], plan: 120, tuition: 6850,
    note: '热门组，位次要求高',
    history: [{ year: 2025, rank: 5800, score: 664 }, { year: 2024, rank: 6100, score: 661 }],
    majors: [
      { code: '501', name: '计算机科学与技术', plan: 60, years: 4, tuition: 6850 },
      { code: '502', name: '软件工程', plan: 60, years: 4, tuition: 6850 }
    ]
  },
  {
    id: '10561-402', collegeCode: '10561', groupCode: '402', groupName: '工科试验班',
    subjectReq: ['物理', '化学'], plan: 220, tuition: 6850,
    note: '含材料、机械、能源方向',
    history: [{ year: 2025, rank: 12400, score: 640 }],
    majors: [
      { code: '401', name: '机械工程', plan: 80, years: 4, tuition: 6850 },
      { code: '402', name: '材料科学与工程', plan: 70, years: 4, tuition: 6850 },
      { code: '403', name: '能源与动力工程', plan: 70, years: 4, tuition: 6850 }
    ]
  },
  {
    id: '10559-303', collegeCode: '10559', groupCode: '303', groupName: '经济与统计类',
    subjectReq: ['物理'], plan: 160, tuition: 6060,
    note: '含全英文授课专业',
    history: [{ year: 2025, rank: 21000, score: 611 }],
    majors: [
      { code: '311', name: '经济学', plan: 60, years: 4, tuition: 6060 },
      { code: '312', name: '统计学', plan: 50, years: 4, tuition: 6060 },
      { code: '313', name: '金融学', plan: 50, years: 4, tuition: 6060 }
    ]
  },
  {
    id: '10574-208', collegeCode: '10574', groupCode: '208', groupName: '师范与教育类',
    subjectReq: [], plan: 200, tuition: 5610,
    note: '不限选科，部分专业需面试',
    history: [{ year: 2025, rank: 26500, score: 599 }],
    majors: [
      { code: '211', name: '教育学', plan: 70, years: 4, tuition: 5610 },
      { code: '212', name: '心理学（师范）', plan: 70, years: 4, tuition: 5610 },
      { code: '213', name: '学前教育', plan: 60, years: 4, tuition: 5610 }
    ]
  },
  {
    id: '10574-310', collegeCode: '10574', groupCode: '310', groupName: '政治与历史类',
    subjectReq: ['历史', '政治'], plan: 120, tuition: 5610,
    note: '要求历史与政治同时选考',
    history: [{ year: 2025, rank: 9800, score: 578 }],
    majors: [
      { code: '214', name: '思想政治教育（师范）', plan: 60, years: 4, tuition: 5610 },
      { code: '215', name: '历史学（师范）', plan: 60, years: 4, tuition: 5610 }
    ]
  },
  {
    id: '10005-601', collegeCode: '10005', groupCode: '601', groupName: '信息类',
    subjectReq: ['物理', '化学'], plan: 90, tuition: 5500,
    note: '省外院校，在京招生组同时在粤招生',
    history: [{ year: 2025, rank: 25400, score: 602 }],
    majors: [
      { code: '601', name: '计算机科学与技术', plan: 45, years: 4, tuition: 5500 },
      { code: '602', name: '信息安全', plan: 45, years: 4, tuition: 5500 }
    ]
  },
  {
    id: '10252-702', collegeCode: '10252', groupCode: '702', groupName: '光电与仪器类',
    subjectReq: ['物理', '化学'], plan: 110, tuition: 5000,
    note: '省外院校',
    history: [{ year: 2025, rank: 28600, score: 595 }],
    majors: [
      { code: '701', name: '光电信息科学与工程', plan: 60, years: 4, tuition: 5000 },
      { code: '702', name: '测控技术与仪器', plan: 50, years: 4, tuition: 5000 }
    ]
  },
  {
    id: '10497-810', collegeCode: '10497', groupCode: '810', groupName: '材料与交通类',
    subjectReq: ['物理', '化学'], plan: 130, tuition: 5850,
    note: '省外院校',
    history: [{ year: 2025, rank: 33000, score: 584 }],
    majors: [
      { code: '801', name: '材料科学与工程', plan: 70, years: 4, tuition: 5850 },
      { code: '802', name: '交通运输', plan: 60, years: 4, tuition: 5850 }
    ]
  },
  {
    id: '10533-905', collegeCode: '10533', groupCode: '905', groupName: '医学与材料类',
    subjectReq: ['物理', '化学'], plan: 80, tuition: 6500,
    note: '省外院校，医学类专业学制较长',
    history: [{ year: 2025, rank: 15800, score: 628 }],
    majors: [
      { code: '901', name: '临床医学', plan: 40, years: 5, tuition: 6500 },
      { code: '902', name: '材料类', plan: 40, years: 4, tuition: 6500 }
    ]
  },
  {
    id: '10614-1105', collegeCode: '10614', groupCode: '1105', groupName: '电子信息类',
    subjectReq: ['物理', '化学'], plan: 70, tuition: 4900,
    note: '省外院校，位次要求高',
    history: [{ year: 2025, rank: 9600, score: 649 }],
    majors: [
      { code: '1101', name: '电子信息工程', plan: 40, years: 4, tuition: 4900 },
      { code: '1102', name: '通信工程', plan: 30, years: 4, tuition: 4900 }
    ]
  }
];
