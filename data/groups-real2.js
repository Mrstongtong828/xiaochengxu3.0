// 华南师范大学、岭南师范学院 2025 年广东省录取数据（来自两校招生官网公开页面与投档统计表）
// 华南师范大学按「投档单位（专业组）」公布，组最低分/最低排位取该组公布的合计值。
// 岭南师范学院按专业公布，未公开专业组代码，这里的组代码为演示值，正式填报请以当年招生专业目录为准。

module.exports = [
  // ==================== 华南师范大学（2025 年广东，物理类） ====================
  {
    id: '10574-221', collegeCode: '10574', groupCode: '221', groupName: '物理组（数学师范类）',
    subjectReq: ['物理'], plan: 144, tuition: 5190,
    note: '华南师范大学 2025 年广东省本科批录取：组最低分 610 分、最低排位 19563',
    history: [{ year: 2025, rank: 19563, score: 610 }],
    majors: [
      { code: '01', name: '数学与应用数学（师范，长基创新班）', plan: 10, years: 4, tuition: 5190 },
      { code: '02', name: '数学与应用数学（师范）', plan: 134, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-223', collegeCode: '10574', groupCode: '223', groupName: '物理组（生化师范类）',
    subjectReq: ['物理'], plan: 222, tuition: 5190,
    note: '华南师范大学 2025 年广东省本科批录取：组最低分 601 分、最低排位 26143',
    history: [{ year: 2025, rank: 26143, score: 601 }],
    majors: [
      { code: '03', name: '生物科学（师范）', plan: 53, years: 4, tuition: 5190 },
      { code: '04', name: '化学（师范）', plan: 169, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-224', collegeCode: '10574', groupCode: '224', groupName: '物理组（计算机师范类）',
    subjectReq: ['物理'], plan: 28, tuition: 5190,
    note: '华南师范大学 2025 年广东省本科批录取：组最低分 607 分、最低排位 21575',
    history: [{ year: 2025, rank: 21575, score: 607 }],
    majors: [
      { code: '05', name: '计算机科学与技术（师范）', plan: 28, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-238', collegeCode: '10574', groupCode: '238', groupName: '物理组（理工大类）',
    subjectReq: ['物理'], plan: 831, tuition: 5190,
    note: '华南师范大学 2025 年广东省本科批录取：组最低分 600 分、最低排位 26280；组内专业较多，这里只列部分',
    history: [{ year: 2025, rank: 26280, score: 600 }],
    majors: [
      { code: '06', name: '信息与计算科学', plan: 50, years: 4, tuition: 5190 },
      { code: '07', name: '生物技术', plan: 29, years: 4, tuition: 5190 },
      { code: '08', name: '电子信息工程（新工科领航班）', plan: 20, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-232', collegeCode: '10574', groupCode: '232', groupName: '物理组（外语类）',
    subjectReq: ['物理'], plan: 98, tuition: 5190,
    note: '华南师范大学 2025 年广东省本科批录取：组最低分 587 分、最低排位 37621',
    history: [{ year: 2025, rank: 37621, score: 587 }],
    majors: [
      { code: '09', name: '日语', plan: 10, years: 4, tuition: 5190 },
      { code: '10', name: '英语（师范）', plan: 60, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-202', collegeCode: '10574', groupCode: '202', groupName: '物理组（汕尾校区）',
    subjectReq: ['物理'], plan: 133, tuition: 5190,
    note: '华南师范大学汕尾校区 2025 年广东省录取：组最低分 574 分、最低排位 50274',
    history: [{ year: 2025, rank: 50274, score: 574 }],
    majors: [
      { code: '11', name: '学前教育（师范）', plan: 33, years: 4, tuition: 5190 },
      { code: '12', name: '材料物理', plan: 121, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10574-201', collegeCode: '10574', groupCode: '201', groupName: '历史组（师范类）',
    subjectReq: ['历史'], plan: 524, tuition: 4590,
    note: '华南师范大学 2025 年广东省本科批历史类录取：组最低分 598 分、最低排位 5680',
    history: [{ year: 2025, rank: 5680, score: 598 }],
    majors: [
      { code: '13', name: '汉语言文学（师范）', plan: 263, years: 4, tuition: 4590 },
      { code: '14', name: '历史学（师范）', plan: 112, years: 4, tuition: 4590 },
      { code: '15', name: '英语（师范）', plan: 123, years: 4, tuition: 4590 }
    ]
  },

  // ==================== 岭南师范学院（2025 年广东） ====================
  {
    id: '10579-101', collegeCode: '10579', groupCode: '101', groupName: '历史类（师范与文科）',
    subjectReq: ['历史'], plan: 700, tuition: 4590,
    note: '岭南师范学院 2025 年广东省录取：历史类汉语言文学（师范）最低分 534、最低排位 33440；组代码为演示值，该表按专业公布',
    history: [{ year: 2025, rank: 33440, score: 534 }],
    majors: [
      { code: '01', name: '汉语言文学（师范）', plan: 405, years: 4, tuition: 4590 },
      { code: '02', name: '思想政治教育（师范）', plan: 182, years: 4, tuition: 4590 },
      { code: '03', name: '英语（师范）', plan: 140, years: 4, tuition: 4590 },
      { code: '04', name: '法学', plan: 150, years: 4, tuition: 4590 }
    ]
  },
  {
    id: '10579-201', collegeCode: '10579', groupCode: '201', groupName: '物理类（工科与信息）',
    subjectReq: ['物理'], plan: 600, tuition: 5190,
    note: '岭南师范学院 2025 年广东省录取：物理类电气工程及其自动化最低分 514、最低排位 138710；组代码为演示值，该表按专业公布',
    history: [{ year: 2025, rank: 138710, score: 514 }],
    majors: [
      { code: '05', name: '电气工程及其自动化', plan: 103, years: 4, tuition: 5190 },
      { code: '06', name: '软件工程（数字化工业软件创新班）', plan: 50, years: 4, tuition: 5190 },
      { code: '07', name: '物联网工程（创新班）', plan: 50, years: 4, tuition: 5190 },
      { code: '08', name: '电子信息工程（创新班）', plan: 40, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10579-301', collegeCode: '10579', groupCode: '301', groupName: '教师专项（提前批）',
    subjectReq: [], plan: 351, tuition: 4590,
    note: '岭南师范学院 2025 年广东省提前批教师专项录取：历史类小学教育（师范）最低分 562、最低排位 18201；物理类最低分 546、最低排位 86252。教师专项属定向培养，需要签订协议，报考前务必核验当年政策',
    history: [{ year: 2025, rank: 18201, score: 562 }],
    majors: [
      { code: '09', name: '小学教育（师范，教师专项）', plan: 200, years: 4, tuition: 4590 },
      { code: '10', name: '学前教育（师范，教师专项）', plan: 7, years: 4, tuition: 4590 },
      { code: '11', name: '特殊教育（师范，教师专项）', plan: 11, years: 4, tuition: 4590 },
      { code: '12', name: '科学教育（师范，教师专项）', plan: 30, years: 4, tuition: 4590 }
    ]
  }
];
