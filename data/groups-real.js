// 深圳大学、东莞理工学院 2025 年广东省录取数据（来自两校招生官网公开页面）
// 组最低分 / 组最低排位 = 该专业组内各专业最低分的最小值、最低排位的最大值。
// 专业代码为演示编码；东莞理工学院的学费按广东省公办理工类标准 5190 元/学年填写，正式填报请以当年招生专业目录为准。

module.exports = [
  // ==================== 深圳大学（2025 年广东） ====================
  {
    id: '10590-230', collegeCode: '10590', groupCode: '230', groupName: '计算机与软件类',
    subjectReq: ['物理'], plan: 226, tuition: 5190,
    note: '深圳大学 2025 年广东省物理类录取：组最低分 622 分、最低排位 12952',
    history: [{ year: 2025, rank: 12952, score: 622 }],
    majors: [
      { code: '01', name: '计算机科学与技术（腾班）', plan: 10, years: 4, tuition: 5190 },
      { code: '02', name: '计算机科学与技术（卓越班）', plan: 24, years: 4, tuition: 5190 },
      { code: '03', name: '计算机类（含计算机科学与技术等）', plan: 192, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10590-233', collegeCode: '10590', groupCode: '233', groupName: '人工智能类',
    subjectReq: ['物理'], plan: 83, tuition: 5190,
    note: '深圳大学 2025 年广东省物理类录取：组最低分 625 分、最低排位 11801',
    history: [{ year: 2025, rank: 11801, score: 625 }],
    majors: [
      { code: '04', name: '人工智能（IEEE 荣誉班）', plan: 15, years: 4, tuition: 5190 },
      { code: '05', name: '人工智能', plan: 68, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10590-223', collegeCode: '10590', groupCode: '223', groupName: '电子信息类',
    subjectReq: ['物理'], plan: 460, tuition: 5190,
    note: '深圳大学 2025 年广东省物理类录取：组最低分 618 分、最低排位 15345',
    history: [{ year: 2025, rank: 15345, score: 618 }],
    majors: [
      { code: '06', name: '电子信息工程（文华班）', plan: 15, years: 4, tuition: 5190 },
      { code: '07', name: '电子信息类（电信学院）', plan: 445, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10590-229', collegeCode: '10590', groupCode: '229', groupName: '机电与物理类',
    subjectReq: ['物理'], plan: 698, tuition: 5190,
    note: '深圳大学 2025 年广东省物理类录取：组最低分 611 分、最低排位 19333',
    history: [{ year: 2025, rank: 19333, score: 611 }],
    majors: [
      { code: '08', name: '光电信息科学与工程（卓越班）', plan: 30, years: 4, tuition: 5190 },
      { code: '09', name: '机械设计制造及其自动化（创新班）', plan: 34, years: 4, tuition: 5190 },
      { code: '10', name: '自动化类（含自动化、机器人工程）', plan: 128, years: 4, tuition: 5190 },
      { code: '11', name: '智能感知工程', plan: 110, years: 4, tuition: 5190 },
      { code: '12', name: '物理学（师范）', plan: 33, years: 4, tuition: 5190 },
      { code: '13', name: '地理空间信息工程（智慧城市）', plan: 46, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10590-242', collegeCode: '10590', groupCode: '242', groupName: '医学类',
    subjectReq: ['物理', '化学'], plan: 260, tuition: 5800,
    note: '深圳大学 2025 年广东省物理类录取：组最低分 594 分、最低排位 31703；医学类专业学费按医学类标准',
    history: [{ year: 2025, rank: 31703, score: 594 }],
    majors: [
      { code: '14', name: '临床医学（卓越班）', plan: 30, years: 5, tuition: 5800 },
      { code: '15', name: '口腔医学', plan: 39, years: 5, tuition: 5800 },
      { code: '16', name: '药学', plan: 35, years: 4, tuition: 5800 },
      { code: '17', name: '预防医学', plan: 11, years: 5, tuition: 5800 },
      { code: '18', name: '临床医学', plan: 145, years: 5, tuition: 5800 }
    ]
  },
  {
    id: '10590-202', collegeCode: '10590', groupCode: '202', groupName: '法学与公共管理类（历史类）',
    subjectReq: ['历史'], plan: 213, tuition: 4590,
    note: '深圳大学 2025 年广东省历史类录取：组最低分 598 分、最低排位 5522；仅历史类考生可报',
    history: [{ year: 2025, rank: 5522, score: 598 }],
    majors: [
      { code: '19', name: '法学', plan: 135, years: 4, tuition: 4590 },
      { code: '20', name: '行政管理', plan: 40, years: 4, tuition: 4590 },
      { code: '21', name: '社会学', plan: 38, years: 4, tuition: 4590 }
    ]
  },

  // ==================== 东莞理工学院（2025 年广东） ====================
  {
    id: '11819-201', collegeCode: '11819', groupCode: '201', groupName: '物理组（面向全省）',
    subjectReq: ['物理'], plan: 306, tuition: 5190,
    note: '东莞理工学院 2025 年广东省录取：组最低分 563 分、最低排位 63807',
    history: [{ year: 2025, rank: 63807, score: 563 }],
    majors: [
      { code: '01', name: '计算机类', plan: 306, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11819-202', collegeCode: '11819', groupCode: '202', groupName: '物理组（除东莞市，再选化学）',
    subjectReq: ['物理', '化学'], plan: 1718, tuition: 5190,
    note: '东莞理工学院 2025 年广东省录取：组最低分 550 分、最低排位 80557；限非东莞生源，且再选科目须含化学',
    history: [{ year: 2025, rank: 80557, score: 550 }],
    majors: [
      { code: '02', name: '工业工程', plan: 159, years: 4, tuition: 5190 },
      { code: '03', name: '工业软件', plan: 158, years: 4, tuition: 5190 },
      { code: '04', name: '微电子科学与工程', plan: 145, years: 4, tuition: 5190 },
      { code: '05', name: '材料类', plan: 126, years: 4, tuition: 5190 },
      { code: '06', name: '工程管理', plan: 102, years: 4, tuition: 5190 },
      { code: '07', name: '电子信息工程', plan: 82, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11819-203', collegeCode: '11819', groupCode: '203', groupName: '物理组（除东莞市，管理文科类）',
    subjectReq: ['物理'], plan: 367, tuition: 5190,
    note: '东莞理工学院 2025 年广东省录取：组最低分 536 分、最低排位 102979',
    history: [{ year: 2025, rank: 102979, score: 536 }],
    majors: [
      { code: '08', name: '质量管理工程', plan: 144, years: 4, tuition: 5190 },
      { code: '09', name: '工商管理', plan: 77, years: 4, tuition: 4590 },
      { code: '10', name: '会计学', plan: 53, years: 4, tuition: 4590 },
      { code: '11', name: '人力资源管理', plan: 16, years: 4, tuition: 4590 },
      { code: '12', name: '小学教育（师范）', plan: 10, years: 4, tuition: 4590 }
    ]
  },
  {
    id: '11819-204', collegeCode: '11819', groupCode: '204', groupName: '物理组（东莞市生源，再选化学）',
    subjectReq: ['物理', '化学'], plan: 447, tuition: 5190,
    note: '东莞理工学院 2025 年广东省录取：组最低分 540 分、最低排位 95980；限东莞生源',
    history: [{ year: 2025, rank: 95980, score: 540 }],
    majors: [
      { code: '13', name: '微电子科学与工程', plan: 28, years: 4, tuition: 5190 },
      { code: '14', name: '工业工程', plan: 25, years: 4, tuition: 5190 },
      { code: '15', name: '土木工程', plan: 24, years: 4, tuition: 5190 },
      { code: '16', name: '材料类', plan: 22, years: 4, tuition: 5190 },
      { code: '17', name: '通信工程', plan: 22, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '11819-205', collegeCode: '11819', groupCode: '205', groupName: '物理组（东莞市生源）',
    subjectReq: ['物理'], plan: 191, tuition: 5190,
    note: '东莞理工学院 2025 年广东省录取：组最低分 526 分、最低排位 119185；限东莞生源',
    history: [{ year: 2025, rank: 119185, score: 526 }],
    majors: [
      { code: '18', name: '工商管理', plan: 33, years: 4, tuition: 4590 },
      { code: '19', name: '会计学', plan: 32, years: 4, tuition: 4590 },
      { code: '20', name: '人力资源管理', plan: 22, years: 4, tuition: 4590 },
      { code: '21', name: '质量管理工程', plan: 20, years: 4, tuition: 5190 },
      { code: '22', name: '小学教育（师范）', plan: 16, years: 4, tuition: 4590 }
    ]
  },
  {
    id: '11819-206', collegeCode: '11819', groupCode: '206', groupName: '历史组（除东莞市）',
    subjectReq: ['历史'], plan: 473, tuition: 4590,
    note: '东莞理工学院 2025 年广东省历史类录取：组最低分 544 分、最低排位 27371',
    history: [{ year: 2025, rank: 27371, score: 544 }],
    majors: [
      { code: '23', name: '会计学', plan: 100, years: 4, tuition: 4590 },
      { code: '24', name: '工商管理', plan: 83, years: 4, tuition: 4590 },
      { code: '25', name: '人力资源管理', plan: 65, years: 4, tuition: 4590 },
      { code: '26', name: '汉语言文学', plan: 44, years: 4, tuition: 4590 },
      { code: '27', name: '法学', plan: 30, years: 4, tuition: 4590 }
    ]
  }
];
