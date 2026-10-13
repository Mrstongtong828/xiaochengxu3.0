// 暨南大学 2025 年广东省录取数据（来自学校本科招生网《暨南大学2025年在广东录取分数线》）
// 官方按专业公布，未公布专业组代码，这里按学科方向归并为演示分组，组代码为演示值。
// 官方汇总：本科普通批物理类录取 1875 人，最低分 591、最低排位 34231；历史类录取 469 人，最低分 603、最低排位 4615。

module.exports = [
  {
    id: '10559-201', collegeCode: '10559', groupCode: '201', groupName: '计算机与信息类（演示分组）',
    subjectReq: ['物理'], plan: 24, tuition: 5190,
    note: '暨南大学 2025 年广东省录取：计算机科学与技术（全英语教学）最低分 616、最低排位 16073。组代码为演示值',
    history: [{ year: 2025, rank: 16073, score: 616 }],
    majors: [
      { code: '01', name: '计算机科学与技术（全英语教学）', plan: 24, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10559-202', collegeCode: '10559', groupCode: '202', groupName: '经济与管理类（演示分组）',
    subjectReq: ['物理'], plan: 121, tuition: 4590,
    note: '暨南大学 2025 年广东省录取：本组内最低位次专业为工商管理（594 分、31107 位）。组代码为演示值',
    history: [{ year: 2025, rank: 31107, score: 594 }],
    majors: [
      { code: '02', name: '金融学', plan: 7, years: 4, tuition: 4590 },
      { code: '03', name: '会计学', plan: 22, years: 4, tuition: 4590 },
      { code: '04', name: '经济统计学', plan: 23, years: 4, tuition: 4590 },
      { code: '05', name: '工商管理', plan: 12, years: 4, tuition: 4590 },
      { code: '06', name: '市场营销（数智营销创新班）', plan: 10, years: 4, tuition: 4590 }
    ]
  },
  {
    id: '10559-203', collegeCode: '10559', groupCode: '203', groupName: '法学与国际关系类（演示分组）',
    subjectReq: ['物理'], plan: 40, tuition: 4590,
    note: '暨南大学 2025 年广东省录取：本组内最低位次专业为国际政治（591 分、34231 位），与学校物理类最低线一致。组代码为演示值',
    history: [{ year: 2025, rank: 34231, score: 591 }],
    majors: [
      { code: '07', name: '法学', plan: 20, years: 4, tuition: 4590 },
      { code: '08', name: '知识产权', plan: 5, years: 4, tuition: 4590 },
      { code: '09', name: '国际政治', plan: 7, years: 4, tuition: 4590 },
      { code: '10', name: '国际事务与国际关系（区域国别创新班）', plan: 8, years: 4, tuition: 4590 }
    ]
  },
  {
    id: '10559-204', collegeCode: '10559', groupCode: '204', groupName: '理工类（理化材料方向，演示分组）',
    subjectReq: ['物理', '化学'], plan: 100, tuition: 5190,
    note: '暨南大学 2025 年广东省录取：本组内最低位次专业为环境科学与工程（智慧环境创新班）599 分、27600 位。组代码为演示值',
    history: [{ year: 2025, rank: 27600, score: 599 }],
    majors: [
      { code: '11', name: '材料科学与工程', plan: 25, years: 4, tuition: 5190 },
      { code: '12', name: '化学', plan: 20, years: 4, tuition: 5190 },
      { code: '13', name: '应用化学', plan: 22, years: 4, tuition: 5190 },
      { code: '14', name: '环境科学与工程（智慧环境创新班）', plan: 33, years: 4, tuition: 5190 }
    ]
  },
  {
    id: '10559-205', collegeCode: '10559', groupCode: '205', groupName: '历史类（法学与文学，演示分组）',
    subjectReq: ['历史'], plan: 21, tuition: 4590,
    note: '暨南大学 2025 年广东省历史类录取：法学最低分 619、最低排位 2120；戏剧影视文学最低分 598、最低排位 5524。历史类汇总最低分 603、最低排位 4615。组代码为演示值',
    history: [{ year: 2025, rank: 5524, score: 598 }],
    majors: [
      { code: '15', name: '法学', plan: 16, years: 4, tuition: 4590 },
      { code: '16', name: '戏剧影视文学', plan: 5, years: 4, tuition: 4590 }
    ]
  }
];
