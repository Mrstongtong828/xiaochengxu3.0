/**
 * 院校数据（由 tools/import-schools.js 生成，请勿手改；改数据请改 templates/*.csv）
 * 层级：records 院校 → groups 专业组 → majors 组内专业，每层都有近三年最低分/最低位次
 * 专业水平：majors[].levels 取值见 data/meta.js 的 LEVEL_TAGS
 * 数据状态：official
 */

window.SCHOOLS = [
  {
    "id": "gdou",
    "name": "广东海洋大学",
    "city": "湛江",
    "nature": "公办",
    "type": "农林",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "省高水平大学重点学科建设高校"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 513,
          "minRank": 31267,
          "plan": 4,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 536,
          "minRank": 32208,
          "plan": 4,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 528,
          "minRank": 33502,
          "plan": 7,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 505,
          "minRank": 139369,
          "plan": 17,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 507,
          "minRank": 151480,
          "plan": 18,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 499,
          "minRank": 181910,
          "plan": 28,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "gdou-history-226",
        "collegeId": "gdou",
        "code": "226",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 513,
            "minRank": 31267,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 525,
                "minRank": 24942,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": 26316,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "新闻学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 27586,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "秘书学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 28858,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "汉语国际教育",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 28934,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 31046,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 31069,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-227",
        "collegeId": "gdou",
        "code": "227",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 513,
            "minRank": 31024,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 23515,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 525,
                "minRank": 24990,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 24309,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "经济与金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": 24056,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": 25631,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": 25415,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 26775,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "土地资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 30867,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "社会学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 31024,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 30991,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 30720,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-228",
        "collegeId": "gdou",
        "code": "228",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 515,
            "minRank": 30038,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 542,
            "minRank": 28710,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "政治学与行政学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 29918,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 542,
                "minRank": 28710,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-229",
        "collegeId": "gdou",
        "code": "229",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 538,
            "minRank": 30702,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 501,
                "minRank": 38050,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 549,
                "minRank": 24507,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 31855,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 552,
                "minRank": 22998,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "新闻学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 32822,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 496,
                "minRank": 41367,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 555,
                "minRank": 21547,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "经济与金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 555,
                "minRank": 21733,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 27131,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 27516,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 30437,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "土地资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 30631,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": 30702,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 546,
                "minRank": 26322,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "社会学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": 30673,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-230",
        "collegeId": "gdou",
        "code": "230",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 513,
            "minRank": 31100,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 536,
            "minRank": 32208,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 27526,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 29362,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 30011,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 31045,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "汉语国际教育",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": 31777,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 27533,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "秘书学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": 32197,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 27529,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "新闻学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 542,
                "minRank": 28327,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": 32208,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": 32179,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-231",
        "collegeId": "gdou",
        "code": "231",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2025": {
            "minScore": 541,
            "minRank": 28978,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 543,
                "minRank": 27790,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": 25661,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 27171,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 541,
                "minRank": 28978,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-232",
        "collegeId": "gdou",
        "code": "232",
        "scoreType": "history",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2025": {
            "minScore": 547,
            "minRank": 25798,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "汉语言文学（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": 25798,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-233",
        "collegeId": "gdou",
        "code": "233",
        "scoreType": "history",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2025": {
            "minScore": 546,
            "minRank": 26009,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 546,
                "minRank": 26009,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-history-234",
        "collegeId": "gdou",
        "code": "234",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 535,
            "minRank": 28635,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-235",
        "collegeId": "gdou",
        "code": "235",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 543,
            "minRank": 23811,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-236",
        "collegeId": "gdou",
        "code": "236",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 528,
            "minRank": 33496,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-237",
        "collegeId": "gdou",
        "code": "237",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 543,
            "minRank": 23837,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-238",
        "collegeId": "gdou",
        "code": "238",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 528,
            "minRank": 33502,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-239",
        "collegeId": "gdou",
        "code": "239",
        "scoreType": "history",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2026": {
            "minScore": 540,
            "minRank": 25429,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-240",
        "collegeId": "gdou",
        "code": "240",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 530,
            "minRank": 31808,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-history-241",
        "collegeId": "gdou",
        "code": "241",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 541,
            "minRank": 24906,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-201",
        "collegeId": "gdou",
        "code": "201",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 543,
            "minRank": 79492,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 516,
            "minRank": 136386,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 522,
            "minRank": 140098,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 548,
                "minRank": 73460,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 545,
                "minRank": 77213,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 543,
                "minRank": 79492,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 524,
                "minRank": 122004,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "食品质量与安全",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 516,
                "minRank": 136307,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "生物工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 516,
                "minRank": 136386,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-202",
        "collegeId": "gdou",
        "code": "202",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 524,
            "minRank": 108463,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 507,
            "minRank": 151480,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 517,
            "minRank": 149109,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "大气科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 102605,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "海洋科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": 108074,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "应用气象学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": 108463,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "园林",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 507,
                "minRank": 151480,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-203",
        "collegeId": "gdou",
        "code": "203",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 506,
            "minRank": 136679,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 513,
            "minRank": 140465,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 529,
            "minRank": 127984,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "海洋渔业科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 115432,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 523,
                "minRank": 123705,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "水产养殖学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 130553,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 516,
                "minRank": 136207,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "工业设计",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 126934,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": 132746,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "水生动物医学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 508,
                "minRank": 133053,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 514,
                "minRank": 140345,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "海洋技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 136174,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 514,
                "minRank": 139770,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "生物科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": 136679,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 513,
                "minRank": 140465,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-204",
        "collegeId": "gdou",
        "code": "204",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 507,
            "minRank": 135599,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 523,
            "minRank": 124513,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 533,
            "minRank": 120916,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "应用化学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 132508,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "制药工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 131987,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "海洋资源与环境",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 132920,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "环境科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 135599,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "海洋药学+生物科学（与广东医科大学联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "联合培养",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": 124513,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-205",
        "collegeId": "gdou",
        "code": "205",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 534,
            "minRank": 92479,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 508,
            "minRank": 151140,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 506,
            "minRank": 169918,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 542,
                "minRank": 81378,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 540,
                "minRank": 84496,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 537,
                "minRank": 88134,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 536,
                "minRank": 90034,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 91617,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "电子科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 91651,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "信息与计算科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 534,
                "minRank": 92479,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "农学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 508,
                "minRank": 150232,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "园艺",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 508,
                "minRank": 151140,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "动物科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 511,
                "minRank": 145339,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "动物医学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": 130495,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-206",
        "collegeId": "gdou",
        "code": "206",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 514,
            "minRank": 123358,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 512,
            "minRank": 142753,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 514,
            "minRank": 155255,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "机械设计制造及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 101172,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "机械电子工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 108812,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "能源与动力工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 113928,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "船舶与海洋工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "海滨校区",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123200,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "材料成型及控制工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": 117717,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "港口航道与海岸工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123358,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "建筑环境与能源应用工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123339,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "海洋资源与环境",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138027,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "制药工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 513,
                "minRank": 140988,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "环境科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 512,
                "minRank": 142753,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "应用化学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 514,
                "minRank": 138819,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-207",
        "collegeId": "gdou",
        "code": "207",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 534,
            "minRank": 93143,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 528,
            "minRank": 115975,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 533,
            "minRank": 121908,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 534,
                "minRank": 93143,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "大气科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": 109555,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "海洋科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 529,
                "minRank": 114322,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "应用气象学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 528,
                "minRank": 115975,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-208",
        "collegeId": "gdou",
        "code": "208",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 131573,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 519,
            "minRank": 130543,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 526,
            "minRank": 134477,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "交通运输",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 128989,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 130543,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "轮机工程(陆上)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 131573,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "轮机工程（陆上）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2025": {
                "minScore": 520,
                "minRank": 129360,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-209",
        "collegeId": "gdou",
        "code": "209",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 507,
            "minRank": 136202,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 548,
            "minRank": 83881,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 550,
            "minRank": 92009,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "园林",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 136202,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 553,
                "minRank": 77425,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 550,
                "minRank": 81668,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 548,
                "minRank": 83881,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-210",
        "collegeId": "gdou",
        "code": "210",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 505,
            "minRank": 139369,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 539,
            "minRank": 98067,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 544,
            "minRank": 102386,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "动物医学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 121322,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "动物科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 135684,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "农学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 139369,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "园艺",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 139363,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "机械电子工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 97519,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "机械设计制造及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 95429,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "材料成型及控制工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 98067,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 545,
                "minRank": 88431,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 542,
                "minRank": 92520,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-211",
        "collegeId": "gdou",
        "code": "211",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 508,
            "minRank": 133868,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 522,
            "minRank": 124972,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 529,
            "minRank": 128169,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 126637,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "生物工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 131864,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "食品质量与安全",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 508,
                "minRank": 133868,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "港口航道与海岸工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2025": {
                "minScore": 522,
                "minRank": 124972,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "建筑环境与能源应用工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": 123784,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "能源与动力工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 530,
                "minRank": 112602,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "船舶与海洋工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "海滨校区",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": 123624,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-212",
        "collegeId": "gdou",
        "code": "212",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 525,
            "minRank": 106726,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 539,
            "minRank": 97805,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 542,
            "minRank": 105277,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "工业工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": 103242,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "工程管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2024": {
                "minScore": 525,
                "minRank": 106726,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 95680,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "信息与计算科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 97805,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "电子科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 96378,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 89760,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 97273,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-213",
        "collegeId": "gdou",
        "code": "213",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2024": {
            "minScore": 523,
            "minRank": 110208,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 548,
            "minRank": 96576,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 90545,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "秘书学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 533,
                "minRank": 94472,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "汉语国际教育",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 533,
                "minRank": 94417,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "新闻学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 525,
                "minRank": 106939,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 109971,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 110208,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 110108,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "船舶与海洋工程（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外合作办学",
            "history": {
              "2025": {
                "minScore": 513,
                "minRank": 141283,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "电子信息工程（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作办学",
            "history": {
              "2025": {
                "minScore": 522,
                "minRank": 126067,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-214",
        "collegeId": "gdou",
        "code": "214",
        "scoreType": "physics",
        "name": "中外合作办学",
        "kind": "中外合作办学",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外合作办学｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 498,
            "minRank": 184654,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 533,
                "minRank": 94217,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 104695,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "社会学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 116330,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 112996,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "土地资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 130677,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 125033,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 130740,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 129906,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 130840,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 127923,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "经济与金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 130851,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "政治学与行政学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 109444,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-215",
        "collegeId": "gdou",
        "code": "215",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 529,
            "minRank": 99737,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 524,
            "minRank": 122395,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 503,
            "minRank": 174147,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "政治学与行政学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 529,
                "minRank": 99737,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "工业工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 527,
                "minRank": 117674,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "工程管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "海滨校区",
            "history": {
              "2025": {
                "minScore": 524,
                "minRank": 122395,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-216",
        "collegeId": "gdou",
        "code": "216",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 533,
            "minRank": 106455,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 529,
            "minRank": 128243,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": 96576,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "机械设计制造及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 101628,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "能源与动力工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 525,
                "minRank": 106037,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 105388,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 533,
                "minRank": 106455,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-217",
        "collegeId": "gdou",
        "code": "217",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 509,
            "minRank": 148910,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 516,
            "minRank": 152050,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 542,
                "minRank": 80700,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 539,
                "minRank": 84701,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 91438,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 146774,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 146824,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "经济与金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 509,
                "minRank": 148327,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 514,
                "minRank": 140177,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 509,
                "minRank": 148910,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": 124268,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 509,
                "minRank": 148771,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "土地资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 509,
                "minRank": 147976,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 509,
                "minRank": 148832,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": 111050,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "014",
            "name": "社会学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 514,
                "minRank": 140158,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-218",
        "collegeId": "gdou",
        "code": "218",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 524,
            "minRank": 122266,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 513,
            "minRank": 157563,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "地方专项",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 124373,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 542,
                "minRank": 92848,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "秘书学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 533,
                "minRank": 107021,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 527,
                "minRank": 116746,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "新闻学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 524,
                "minRank": 122266,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "汉语国际教育",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 530,
                "minRank": 112489,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 528,
                "minRank": 116277,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 526,
                "minRank": 119516,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-219",
        "collegeId": "gdou",
        "code": "219",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2024": {
            "minScore": 511,
            "minRank": 128208,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 508,
            "minRank": 166376,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 120249,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "食品质量与安全",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 128208,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "食品科学与工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 521,
                "minRank": 128217,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "食品质量与安全（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 516,
                "minRank": 136488,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-220",
        "collegeId": "gdou",
        "code": "220",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 131845,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 526,
            "minRank": 133362,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "食品营养与健康",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 131845,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "计算机科学与技术（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 89692,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "软件工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 96104,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "物联网工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 98314,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-221",
        "collegeId": "gdou",
        "code": "221",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2024": {
            "minScore": 541,
            "minRank": 82948,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 516,
            "minRank": 152401,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 542,
                "minRank": 80446,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 541,
                "minRank": 82948,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "机械电子工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 96994,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "机械设计制造及其自动化（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 543,
                "minRank": 91988,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "能源与动力工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": 99134,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "电气工程及其自动化（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 545,
                "minRank": 88631,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "通信工程（地方专项）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": 99120,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-222",
        "collegeId": "gdou",
        "code": "222",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 521,
            "minRank": 143084,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 533,
                "minRank": 94643,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 522,
                "minRank": 124945,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "食品质量与安全",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 132131,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-223",
        "collegeId": "gdou",
        "code": "223",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 541,
            "minRank": 107135,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 534,
                "minRank": 92528,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "机械设计制造及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 533,
                "minRank": 94702,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "机器人工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": 95384,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": 97667,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "材料成型及控制工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": 97498,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "食品营养与健康",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 516,
                "minRank": 135999,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-224",
        "collegeId": "gdou",
        "code": "224",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 544,
            "minRank": 102943,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 114419,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 122936,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 125957,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 128517,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 549,
                "minRank": 82839,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": 85706,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-225",
        "collegeId": "gdou",
        "code": "225",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 539,
            "minRank": 111019,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "电子信息工程(中外合作办学)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作办学",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 112656,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "船舶与海洋工程(中外合作办学)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外合作办学",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": 116799,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1327.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "机器人工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 541,
                "minRank": 95243,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "机械设计制造及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 541,
                "minRank": 94565,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": 90423,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "材料成型及控制工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": 100174,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": 100170,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-226",
        "collegeId": "gdou",
        "code": "226",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2025": {
            "minScore": 534,
            "minRank": 106191,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 513,
            "minRank": 157234,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 534,
                "minRank": 106191,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-227",
        "collegeId": "gdou",
        "code": "227",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2025": {
            "minScore": 515,
            "minRank": 138593,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 516,
            "minRank": 152195,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 137319,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 528,
                "minRank": 115467,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 517,
                "minRank": 134111,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "阳江校区",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138593,
                "source": "https://zsjy.gdou.edu.cn/info/1174/1606.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gdou-physics-228",
        "collegeId": "gdou",
        "code": "228",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 547,
            "minRank": 97432,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-229",
        "collegeId": "gdou",
        "code": "229",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 540,
            "minRank": 108404,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-230",
        "collegeId": "gdou",
        "code": "230",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 542,
            "minRank": 105193,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-231",
        "collegeId": "gdou",
        "code": "231",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 545,
            "minRank": 100955,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-232",
        "collegeId": "gdou",
        "code": "232",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 499,
            "minRank": 181910,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdou-physics-233",
        "collegeId": "gdou",
        "code": "233",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 534,
            "minRank": 120089,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      }
    ],
    "majorLevels": [
      {
        "name": "食品科学与工程",
        "levels": [
          "gjyl"
        ],
        "year": 2019,
        "source": "https://www.gdou.edu.cn/spkx/xygk/xyjj.htm"
      },
      {
        "name": "船舶与海洋工程",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.nfnews.com/content/16VLmwwpyr.html"
      },
      {
        "name": "水产养殖学",
        "levels": [
          "gjyl"
        ],
        "year": 2019,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "海洋科学",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "食品质量与安全",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.gdou.edu.cn/spkx/xygk/xyjj.htm"
      },
      {
        "name": "海洋渔业科学与技术",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "动物科学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "水产（一级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "水产品加工及贮藏工程（二级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "海洋科学（一级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "机械制造及其自动化（二级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "动物遗传育种与繁殖（二级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "农业经济管理（二级学科）",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gdou.edu.cn/xxgk/xxjj.htm"
      },
      {
        "name": "大气科学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.gdou.edu.cn/info/1091/59921.htm"
      }
    ]
  },
  {
    "id": "gduf",
    "name": "广东金融学院",
    "city": "广州",
    "nature": "公办",
    "type": "财经",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "华南唯一金融类本科"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 502,
          "minRank": 37741,
          "plan": 4,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 530,
          "minRank": 35891,
          "plan": 5,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 521,
          "minRank": 38014,
          "plan": 5,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 510,
          "minRank": 129745,
          "plan": 7,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 516,
          "minRank": 136349,
          "plan": 7,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 515,
          "minRank": 153970,
          "plan": 8,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "gduf-history-211",
        "collegeId": "gduf",
        "code": "211",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 527,
            "minRank": 24224,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 555,
            "minRank": 21588,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 546,
            "minRank": 22052,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": 23865,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 555,
                "minRank": 21309,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "财政学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 23418,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 556,
                "minRank": 21274,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "投资学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": 24224,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 555,
                "minRank": 21588,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 534,
                "minRank": 20919,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 559,
                "minRank": 19433,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "审计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": 22470,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 557,
                "minRank": 20442,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 529,
                "minRank": 23039,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 556,
                "minRank": 21013,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-212",
        "collegeId": "gduf",
        "code": "212",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 512,
            "minRank": 31676,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 548,
            "minRank": 25237,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 538,
            "minRank": 26557,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "信用风险管理与法律防控",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 29046,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 550,
                "minRank": 24002,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 26153,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 552,
                "minRank": 22913,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "知识产权",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 28002,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 550,
                "minRank": 23817,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "社会工作",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 31676,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 548,
                "minRank": 25237,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "国际经贸规则",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 30231,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 548,
                "minRank": 24998,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-213",
        "collegeId": "gduf",
        "code": "213",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 513,
            "minRank": 31191,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 547,
            "minRank": 25934,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 537,
            "minRank": 27121,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 31191,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 30910,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "翻译",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 30839,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": 26415,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 549,
                "minRank": 24841,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 27893,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              },
              "2025": {
                "minScore": 547,
                "minRank": 25830,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": 25934,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-214",
        "collegeId": "gduf",
        "code": "214",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 502,
            "minRank": 37741,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 538,
            "minRank": 30739,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 534,
            "minRank": 29098,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "保险学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 502,
                "minRank": 37741,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "国际商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 32190,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "信用管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": 36438,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "资产评估",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 35713,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 33134,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 34444,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "人力资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 34796,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "电子商务及法律",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 29892,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 502,
                "minRank": 37540,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "公共事业管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 502,
                "minRank": 37735,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "应用心理学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 33389,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "创业管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 502,
                "minRank": 37636,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "劳动与社会保障",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 502,
                "minRank": 37730,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2147.htm"
              }
            }
          },
          {
            "code": "014",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 29642,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "015",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": 30275,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "016",
            "name": "翻译",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": 30739,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-215",
        "collegeId": "gduf",
        "code": "215",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 530,
            "minRank": 35891,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 521,
            "minRank": 38014,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "保险学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 530,
                "minRank": 35889,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "国际商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 541,
                "minRank": 29256,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "信用管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34584,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "资产评估",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 535,
                "minRank": 32667,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 535,
                "minRank": 32622,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34754,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "人力资源管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34660,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "行政管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34573,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "公共事业管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34998,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "应用心理学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 540,
                "minRank": 29718,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "创业管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 530,
                "minRank": 35862,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "劳动与社会保障",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 530,
                "minRank": 35891,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-216",
        "collegeId": "gduf",
        "code": "216",
        "scoreType": "history",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "联合培养",
        "history": {
          "2025": {
            "minScore": 518,
            "minRank": 44540,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 512,
            "minRank": 44795,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学(2+2国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 44531,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学(2+2国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 44394,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "金融学(2+2中澳班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 44445,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "会计学(2+2中澳班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": 43491,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "金融学(3+X国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 44540,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "会计学(3+X国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 44405,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-history-230",
        "collegeId": "gduf",
        "code": "230",
        "scoreType": "history",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2024": {
            "minScore": 517,
            "minRank": 28801,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gduf-history-231",
        "collegeId": "gduf",
        "code": "231",
        "scoreType": "history",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2025": {
            "minScore": 545,
            "minRank": 26703,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 541,
            "minRank": 24921,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 545,
                "minRank": 26703,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 546,
                "minRank": 26369,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-221",
        "collegeId": "gduf",
        "code": "221",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 526,
            "minRank": 104914,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 530,
            "minRank": 112345,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 535,
            "minRank": 118487,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": 95934,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 537,
                "minRank": 100613,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "财政学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": 97474,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 534,
                "minRank": 104766,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "投资学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 104858,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 530,
                "minRank": 112303,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "金融工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 104171,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 530,
                "minRank": 112345,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 536,
                "minRank": 89220,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 540,
                "minRank": 95607,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "审计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": 98474,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 534,
                "minRank": 105200,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 529,
                "minRank": 100611,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 531,
                "minRank": 110247,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "金融科技",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": 109952,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-222",
        "collegeId": "gduf",
        "code": "222",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 516,
            "minRank": 121332,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 519,
            "minRank": 131754,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 521,
            "minRank": 142242,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融科技",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 526,
                "minRank": 104914,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "保险学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 121332,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 131455,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "精算学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 121331,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 131754,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "经济学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": 108313,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 526,
                "minRank": 118521,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 116600,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 524,
                "minRank": 122294,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "经济与金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 116023,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 523,
                "minRank": 124583,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "信用管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 115044,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": 126606,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "互联网金融",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 116367,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "金融数学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 118830,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": 127533,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "经济统计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 114178,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 522,
                "minRank": 126164,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "数字经济",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 118910,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": 127961,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-223",
        "collegeId": "gduf",
        "code": "223",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 534,
            "minRank": 92181,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 540,
            "minRank": 96562,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 539,
            "minRank": 110405,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "信用风险管理与法律防控",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 91584,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 540,
                "minRank": 96317,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 537,
                "minRank": 88201,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 544,
                "minRank": 90673,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "知识产权",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 536,
                "minRank": 90297,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 541,
                "minRank": 94316,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "国际经贸规则",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 534,
                "minRank": 92181,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 540,
                "minRank": 96562,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-224",
        "collegeId": "gduf",
        "code": "224",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 518,
            "minRank": 117280,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 528,
            "minRank": 114856,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 533,
            "minRank": 120481,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 115544,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 116431,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "翻译",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": 117280,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": 95497,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 537,
                "minRank": 100483,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "网络与新媒体",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": 111481,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 528,
                "minRank": 114856,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-225",
        "collegeId": "gduf",
        "code": "225",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 510,
            "minRank": 129745,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 516,
            "minRank": 136349,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 536,
            "minRank": 116133,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "资产评估",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 122567,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 522,
                "minRank": 126229,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 122022,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 520,
                "minRank": 129750,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 121339,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 131768,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "物流管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129510,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 516,
                "minRank": 136349,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "供应链管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129552,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 517,
                "minRank": 133620,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 120081,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 130947,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 129745,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 516,
                "minRank": 135864,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "电子商务及法律",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 513,
                "minRank": 125835,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 517,
                "minRank": 134059,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "应用心理学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 129734,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 517,
                "minRank": 133519,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-226",
        "collegeId": "gduf",
        "code": "226",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 521,
            "minRank": 112025,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 527,
            "minRank": 117585,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 515,
            "minRank": 153970,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": 90982,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 535,
                "minRank": 104203,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": 98422,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 531,
                "minRank": 110242,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 102163,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 528,
                "minRank": 114714,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "数学与应用数学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 112025,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 527,
                "minRank": 117526,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "信息与计算科学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": 111889,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 527,
                "minRank": 117585,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "应用统计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 111998,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 527,
                "minRank": 117371,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-227",
        "collegeId": "gduf",
        "code": "227",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 512,
            "minRank": 127132,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 522,
            "minRank": 124928,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 531,
            "minRank": 124568,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "清远校区四年制本科",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": 115073,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 527,
                "minRank": 116939,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "清远校区四年制本科",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 122087,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 525,
                "minRank": 120603,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "清远校区四年制本科",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 126933,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 523,
                "minRank": 124464,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "应用统计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "清远校区四年制本科",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 127132,
                "source": "https://xxgk.gduf.edu.cn/info/1024/2150.htm"
              },
              "2025": {
                "minScore": 522,
                "minRank": 124928,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "人工智能",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "清远校区四年制本科",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": 124199,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-228",
        "collegeId": "gduf",
        "code": "228",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2026": {
            "minScore": 527,
            "minRank": 131581,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学(2+2国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 146334,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学(2+2国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 145932,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "金融科技(2+2国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 146147,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "金融学(2+2中澳班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 512,
                "minRank": 143960,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "会计学(2+2中澳班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 510,
                "minRank": 146314,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "金融学(3+X国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 511,
                "minRank": 145535,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "会计学(3+X国际班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 511,
                "minRank": 145733,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-229",
        "collegeId": "gduf",
        "code": "229",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "联合培养",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 132102,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 514,
            "minRank": 139021,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 500,
            "minRank": 179976,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术(2+2中澳班)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作培养",
            "history": {
              "2025": {
                "minScore": 514,
                "minRank": 139021,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-230",
        "collegeId": "gduf",
        "code": "230",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "联合培养",
        "history": {
          "2026": {
            "minScore": 508,
            "minRank": 166252,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gduf-physics-231",
        "collegeId": "gduf",
        "code": "231",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2024": {
            "minScore": 528,
            "minRank": 101455,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gduf-physics-232",
        "collegeId": "gduf",
        "code": "232",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2024": {
            "minScore": 524,
            "minRank": 107535,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 533,
            "minRank": 106485,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 540,
            "minRank": 108436,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 533,
                "minRank": 106485,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": 101731,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gduf-physics-233",
        "collegeId": "gduf",
        "code": "233",
        "scoreType": "physics",
        "name": "地方专项",
        "kind": "地方专项",
        "requirePending": true,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "地方专项",
        "history": {
          "2025": {
            "minScore": 534,
            "minRank": 105785,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 537,
            "minRank": 114088,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": 101327,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "软件工程(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 535,
                "minRank": 103473,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "数据科学与大数据技术(地方专项)",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "地方专项",
            "history": {
              "2025": {
                "minScore": 534,
                "minRank": 105785,
                "source": "https://zs.gduf.edu.cn/info/1038/3029.htm"
              }
            }
          }
        ]
      }
    ],
    "majorLevels": [
      {
        "name": "金融学",
        "levels": [
          "gjyl"
        ],
        "year": 2019,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "保险学",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "会计学",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "信用管理",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "投资学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "国际经济与贸易",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "法学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "市场营销",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "财务管理",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "经济统计学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "劳动与社会保障",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "应用经济学",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "工商管理学",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "法学",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "金融学",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      },
      {
        "name": "经济法学",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.gduf.edu.cn/xygk/gjjj.htm"
      }
    ]
  },
  {
    "id": "gdupt",
    "name": "广东石油化工学院",
    "city": "茂名",
    "nature": "公办",
    "type": "理工",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "石化特色"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 496,
          "minRank": 41378,
          "plan": 5,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 521,
          "minRank": 42071,
          "plan": 4,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 513,
          "minRank": 43803,
          "plan": 5,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 491,
          "minRank": 163007,
          "plan": 8,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 499,
          "minRank": 166883,
          "plan": 8,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 503,
          "minRank": 175233,
          "plan": 19,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "gdupt-history-209",
        "collegeId": "gdupt",
        "code": "209",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史",
          "思想政治"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 500,
            "minRank": 38962,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 526,
            "minRank": 38430,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-210",
        "collegeId": "gdupt",
        "code": "210",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 499,
            "minRank": 39355,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 521,
            "minRank": 42071,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-211",
        "collegeId": "gdupt",
        "code": "211",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史",
          "地理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 496,
            "minRank": 41378,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 523,
            "minRank": 40832,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-212",
        "collegeId": "gdupt",
        "code": "212",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 498,
            "minRank": 39972,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 523,
            "minRank": 40401,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-213",
        "collegeId": "gdupt",
        "code": "213",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 497,
            "minRank": 40749,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-220",
        "collegeId": "gdupt",
        "code": "220",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史",
          "思想政治"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 517,
            "minRank": 41168,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-221",
        "collegeId": "gdupt",
        "code": "221",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 513,
            "minRank": 43749,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-222",
        "collegeId": "gdupt",
        "code": "222",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 514,
            "minRank": 43258,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-223",
        "collegeId": "gdupt",
        "code": "223",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 513,
            "minRank": 43803,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-history-224",
        "collegeId": "gdupt",
        "code": "224",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史",
          "地理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 514,
            "minRank": 43409,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-201",
        "collegeId": "gdupt",
        "code": "201",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 497,
            "minRank": 153641,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 507,
            "minRank": 152005,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 520,
            "minRank": 143777,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-202",
        "collegeId": "gdupt",
        "code": "202",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 498,
            "minRank": 151638,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 510,
            "minRank": 146711,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 528,
            "minRank": 130100,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-203",
        "collegeId": "gdupt",
        "code": "203",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 495,
            "minRank": 156819,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 504,
            "minRank": 158327,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 513,
            "minRank": 157811,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-204",
        "collegeId": "gdupt",
        "code": "204",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 492,
            "minRank": 161916,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 503,
            "minRank": 158966,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 512,
            "minRank": 159445,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-205",
        "collegeId": "gdupt",
        "code": "205",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 491,
            "minRank": 163007,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 503,
            "minRank": 158413,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 504,
            "minRank": 173470,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-206",
        "collegeId": "gdupt",
        "code": "206",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 514,
            "minRank": 124618,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 513,
            "minRank": 142049,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 507,
            "minRank": 167674,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-207",
        "collegeId": "gdupt",
        "code": "207",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 510,
            "minRank": 130333,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 512,
            "minRank": 143828,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 515,
            "minRank": 152641,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-208",
        "collegeId": "gdupt",
        "code": "208",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2024": {
            "minScore": 500,
            "minRank": 147411,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 499,
            "minRank": 166883,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 516,
            "minRank": 151480,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-209",
        "collegeId": "gdupt",
        "code": "209",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 531,
            "minRank": 124505,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-210",
        "collegeId": "gdupt",
        "code": "210",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 520,
            "minRank": 145207,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-211",
        "collegeId": "gdupt",
        "code": "211",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 516,
            "minRank": 152104,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-212",
        "collegeId": "gdupt",
        "code": "212",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 505,
            "minRank": 170998,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-213",
        "collegeId": "gdupt",
        "code": "213",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 504,
            "minRank": 173879,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-214",
        "collegeId": "gdupt",
        "code": "214",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 503,
            "minRank": 175233,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-215",
        "collegeId": "gdupt",
        "code": "215",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "地理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 509,
            "minRank": 164541,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-216",
        "collegeId": "gdupt",
        "code": "216",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "思想政治"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 505,
            "minRank": 171487,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-217",
        "collegeId": "gdupt",
        "code": "217",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 512,
            "minRank": 159463,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-218",
        "collegeId": "gdupt",
        "code": "218",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 509,
            "minRank": 163617,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "gdupt-physics-219",
        "collegeId": "gdupt",
        "code": "219",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "",
        "history": {
          "2026": {
            "minScore": 505,
            "minRank": 171951,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      }
    ],
    "majorPool": {
      "physics": [
        {
          "code": "001",
          "name": "电气工程及其自动化（卓越班）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 519,
              "minRank": 116325,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 529,
              "minRank": 113215,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "002",
          "name": "汉语言文学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 516,
              "minRank": 120555,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 159107,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "003",
          "name": "思想政治教育（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 514,
              "minRank": 124618,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 513,
              "minRank": 142049,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "004",
          "name": "化学工程与工艺（卓越班）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 126461,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 529,
              "minRank": 114357,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "005",
          "name": "自动化",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 127729,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 523,
              "minRank": 124552,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "006",
          "name": "地理科学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130333,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 512,
              "minRank": 143828,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "007",
          "name": "法学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 134333,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 158084,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "008",
          "name": "机械设计制造及其自动化",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 134354,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 519,
              "minRank": 130141,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "009",
          "name": "工业工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 507,
              "minRank": 135630,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 501,
              "minRank": 162193,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "010",
          "name": "石油工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 507,
              "minRank": 136396,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 522,
              "minRank": 126408,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "011",
          "name": "电子信息工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 505,
              "minRank": 139689,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 509,
              "minRank": 148338,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "012",
          "name": "会计学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 504,
              "minRank": 140292,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 159654,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "013",
          "name": "能源化学工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 504,
              "minRank": 141064,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 516,
              "minRank": 135551,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "014",
          "name": "能源与动力工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 503,
              "minRank": 142253,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 513,
              "minRank": 142040,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "015",
          "name": "油气储运工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 503,
              "minRank": 142277,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 516,
              "minRank": 135345,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "016",
          "name": "英语（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 502,
              "minRank": 144757,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 501,
              "minRank": 162926,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "017",
          "name": "国际经济与贸易",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 501,
              "minRank": 145837,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 500,
              "minRank": 164510,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "018",
          "name": "物流工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 501,
              "minRank": 146501,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 499,
              "minRank": 166840,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "019",
          "name": "电子信息科学与技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147124,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "020",
          "name": "海洋油气工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147590,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 514,
              "minRank": 139358,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "021",
          "name": "建筑学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147385,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 499,
              "minRank": 166883,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "022",
          "name": "精细化工",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 148221,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 514,
              "minRank": 140336,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "023",
          "name": "历史学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147122,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 500,
              "minRank": 165116,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "024",
          "name": "市场营销",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147411,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 499,
              "minRank": 165915,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "025",
          "name": "学前教育（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 147402,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 502,
              "minRank": 161294,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "026",
          "name": "测控技术与仪器",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 499,
              "minRank": 149298,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 512,
              "minRank": 142735,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "027",
          "name": "计算机科学与技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 499,
              "minRank": 149218,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 510,
              "minRank": 145858,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "028",
          "name": "应用化学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 499,
              "minRank": 149707,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 511,
              "minRank": 145061,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "029",
          "name": "安全工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151614,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 152005,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "030",
          "name": "材料成型及控制工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151599,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 510,
              "minRank": 146711,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "031",
          "name": "工业设计",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151595,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 510,
              "minRank": 146511,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "032",
          "name": "过程装备与控制工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151638,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 510,
              "minRank": 146448,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "033",
          "name": "焊接技术与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151511,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 510,
              "minRank": 146670,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "034",
          "name": "新能源科学与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151873,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 152140,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "035",
          "name": "环保设备工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 497,
              "minRank": 153520,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 151914,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "036",
          "name": "环境工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 497,
              "minRank": 153620,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 152002,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "037",
          "name": "资源勘查工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 497,
              "minRank": 153641,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 509,
              "minRank": 148162,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "038",
          "name": "高分子材料与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 496,
              "minRank": 155087,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 505,
              "minRank": 156207,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "039",
          "name": "集成电路设计与集成系统",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 496,
              "minRank": 154409,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 506,
              "minRank": 154229,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "040",
          "name": "数学与应用数学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 496,
              "minRank": 154520,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 506,
              "minRank": 153657,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "041",
          "name": "网络工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 496,
              "minRank": 154616,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 152755,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "042",
          "name": "功能材料",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 156122,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 158288,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "043",
          "name": "人工智能",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 157283,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 506,
              "minRank": 153896,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "044",
          "name": "生物工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 156808,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 158285,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "045",
          "name": "生物技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 156815,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 158171,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "046",
          "name": "食品科学与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 156819,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 158327,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "047",
          "name": "数据科学与大数据技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 495,
              "minRank": 157158,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 505,
              "minRank": 155905,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "048",
          "name": "物理学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 493,
              "minRank": 159620,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 158413,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "049",
          "name": "物联网工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 493,
              "minRank": 159706,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 505,
              "minRank": 155284,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "050",
          "name": "给排水科学与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 492,
              "minRank": 161916,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 507,
              "minRank": 151850,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "051",
          "name": "土木工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 492,
              "minRank": 161897,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 157482,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "052",
          "name": "信息与计算科学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 492,
              "minRank": 162607,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 158966,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "053",
          "name": "智能建造",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 492,
              "minRank": 161443,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 158903,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "054",
          "name": "智能科学与技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 492,
              "minRank": 161948,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 504,
              "minRank": 157097,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "055",
          "name": "教育技术学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 491,
              "minRank": 163007,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 503,
              "minRank": 158945,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "056",
          "name": "工程力学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2025": {
              "minScore": 510,
              "minRank": 146619,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        }
      ],
      "history": [
        {
          "code": "001",
          "name": "汉语言文学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 504,
              "minRank": 36411,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 523,
              "minRank": 40604,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "002",
          "name": "法学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 501,
              "minRank": 38560,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 528,
              "minRank": 37314,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "003",
          "name": "历史学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 501,
              "minRank": 38495,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 521,
              "minRank": 41928,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "004",
          "name": "思想政治教育（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 500,
              "minRank": 38962,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 526,
              "minRank": 38430,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "005",
          "name": "会计学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 499,
              "minRank": 39699,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 526,
              "minRank": 38434,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "006",
          "name": "英语（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 499,
              "minRank": 39355,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 521,
              "minRank": 42071,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "007",
          "name": "地理科学（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 39972,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 523,
              "minRank": 40832,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "008",
          "name": "国际经济与贸易",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 497,
              "minRank": 40747,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 523,
              "minRank": 40375,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "009",
          "name": "市场营销",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 497,
              "minRank": 40749,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 523,
              "minRank": 40401,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        },
        {
          "code": "010",
          "name": "学前教育（师范）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 496,
              "minRank": 41378,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            },
            "2025": {
              "minScore": 521,
              "minRank": 42016,
              "source": "https://zs.gdupt.edu.cn/zhaosheng_web/web_module/get_recruit_line_list"
            }
          }
        }
      ]
    },
    "majorLevels": [
      {
        "name": "化学工程与工艺",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "http://www.maoming.gov.cn/zwgk/zwzl/zdlyxxgkzl/gxxx/gzdt/content/mpost_864462.html"
      },
      {
        "name": "环境工程",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "http://www.maoming.gov.cn/zwgk/zwzl/zdlyxxgkzl/gxxx/gzdt/content/mpost_864462.html"
      },
      {
        "name": "电子信息工程",
        "levels": [
          "gjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "过程装备与控制工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "http://www.maoming.gov.cn/zwgk/zwzl/zdlyxxgkzl/gxxx/gzdt/content/mpost_864462.html"
      },
      {
        "name": "能源与动力工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "http://www.maoming.gov.cn/zwgk/zwzl/zdlyxxgkzl/gxxx/gzdt/content/mpost_864462.html"
      },
      {
        "name": "生物工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "http://www.maoming.gov.cn/zwgk/zwzl/zdlyxxgkzl/gxxx/gzdt/content/mpost_864462.html"
      },
      {
        "name": "应用化学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "计算机科学与技术",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "食品科学与工程",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "会计学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202206/15/c6589267.html"
      },
      {
        "name": "高分子材料与工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://m.baike.com/wiki/%E5%B9%BF%E4%B8%9C%E7%9F%B3%E6%B2%B9%E5%8C%96%E5%B7%A5%E5%AD%A6%E9%99%A2/3307996"
      },
      {
        "name": "机械设计制造及其自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://m.baike.com/wiki/%E5%B9%BF%E4%B8%9C%E7%9F%B3%E6%B2%B9%E5%8C%96%E5%B7%A5%E5%AD%A6%E9%99%A2/3307996"
      },
      {
        "name": "电气工程及其自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://m.baike.com/wiki/%E5%B9%BF%E4%B8%9C%E7%9F%B3%E6%B2%B9%E5%8C%96%E5%B7%A5%E5%AD%A6%E9%99%A2/3307996"
      },
      {
        "name": "给排水科学与工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://ep.ycwb.com/epaper/ycwb/html/2025-06/26/content_844_713508.htm"
      },
      {
        "name": "化学工程与技术",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202108/18/c5649799.html"
      },
      {
        "name": "石油与天然气工程",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "http://static.nfapp.southcn.com/content/202108/18/c5649799.html"
      },
      {
        "name": "化学工程与工艺",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "http://static.nfapp.southcn.com/content/202007/03/c3722150.html"
      },
      {
        "name": "环境工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "http://static.nfapp.southcn.com/content/202007/03/c3722150.html"
      },
      {
        "name": "电子信息工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "http://static.nfapp.southcn.com/content/202007/03/c3722150.html"
      }
    ]
  },
  {
    "id": "gzmtu",
    "name": "广州航海学院",
    "city": "广州",
    "nature": "公办",
    "type": "理工",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "华南唯一独立设置海事本科"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 503,
          "minRank": 37317,
          "plan": 1,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 536,
          "minRank": 32201,
          "plan": 1,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 532,
          "minRank": 30616,
          "plan": 1,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 505,
          "minRank": 138428,
          "plan": 2,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 515,
          "minRank": 138349,
          "plan": 3,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 518,
          "minRank": 147659,
          "plan": 3,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "gzmtu-history-211",
        "collegeId": "gzmtu",
        "code": "211",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 503,
            "minRank": 37317,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 536,
            "minRank": 32201,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 532,
            "minRank": 30616,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学（海商法）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 27204,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 546,
                "minRank": 26199,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "海事管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": 28878,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 545,
                "minRank": 26833,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "交通管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": 33710,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 541,
                "minRank": 29061,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "物流管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": 37303,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 537,
                "minRank": 31498,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": 37225,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 539,
                "minRank": 30496,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": 35356,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 539,
                "minRank": 30364,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 31889,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 542,
                "minRank": 28325,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "跨境电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": 37314,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 536,
                "minRank": 32201,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "国际商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": 36252,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 538,
                "minRank": 30713,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": 37317,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 536,
                "minRank": 32199,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "意大利语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": 31921,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-history-212",
        "collegeId": "gzmtu",
        "code": "212",
        "scoreType": "history",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 489,
            "minRank": 46008,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 516,
            "minRank": 45432,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 508,
            "minRank": 48311,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2024": {
                "minScore": 489,
                "minRank": 46008,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 516,
                "minRank": 45432,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-history-213",
        "collegeId": "gzmtu",
        "code": "213",
        "scoreType": "history",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 488,
            "minRank": 47174,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 532,
            "minRank": 34449,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 522,
            "minRank": 37135,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": 34449,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "物流管理（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2024": {
                "minScore": 488,
                "minRank": 47174,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-201",
        "collegeId": "gzmtu",
        "code": "201",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 505,
            "minRank": 138428,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 518,
            "minRank": 131794,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 525,
            "minRank": 135560,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "人工智能",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 521,
                "minRank": 126700,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "智能海洋装备",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": 131681,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": 103688,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 525,
                "minRank": 119777,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "车辆工程（轨道车辆）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": 130150,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "车辆工程（汽车车辆）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 520,
                "minRank": 129716,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "船舶与海洋工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": 136465,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": 131794,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "工程管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": 137031,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": 131740,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "邮轮工程与管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": 131614,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "能源与动力工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 512,
                "minRank": 127105,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": 127100,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 112886,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              },
              "2025": {
                "minScore": 530,
                "minRank": 112073,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": 109729,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 515,
                "minRank": 122548,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": 112866,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "014",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123981,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "015",
            "name": "机器人工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123123,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "016",
            "name": "机械工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129008,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "017",
            "name": "车辆工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129301,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "018",
            "name": "土木工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 138299,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "019",
            "name": "道路桥梁与渡河工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": 137862,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "020",
            "name": "港口航道与海岸工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": 137571,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "021",
            "name": "物流工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 138422,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "022",
            "name": "交通运输",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": 138428,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-202",
        "collegeId": "gzmtu",
        "code": "202",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 511,
            "minRank": 129530,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 515,
            "minRank": 137672,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 526,
            "minRank": 134465,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "无人驾驶航空器系统工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 521,
                "minRank": 127362,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "智慧交通",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 137665,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 522,
                "minRank": 126441,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "机械工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 517,
                "minRank": 134675,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "港口航道与海岸工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 137556,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "道路桥梁与渡河工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 137552,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "交通运输",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 137672,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "机器人工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 133065,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 521,
                "minRank": 127750,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "物联网工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 517,
                "minRank": 134466,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "法学（海商法）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": 102354,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "海事管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": 114810,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 128178,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "014",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": 123246,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "015",
            "name": "国际商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129055,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "016",
            "name": "跨境电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129173,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "017",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129103,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "018",
            "name": "交通管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": 120287,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "019",
            "name": "物流管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129494,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          },
          {
            "code": "020",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": 129530,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-203",
        "collegeId": "gzmtu",
        "code": "203",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 515,
            "minRank": 138349,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 518,
            "minRank": 147659,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学（海商法）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 526,
                "minRank": 119071,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "海事管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 524,
                "minRank": 122511,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "交通管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": 133264,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "物流管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138069,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138117,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138225,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "财务管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 520,
                "minRank": 129256,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "跨境电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 516,
                "minRank": 135966,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "国际商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 517,
                "minRank": 134582,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138131,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "意大利语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "",
            "history": {
              "2025": {
                "minScore": 515,
                "minRank": 138349,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "计算机科学与技术（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作办学",
            "history": {
              "2024": {
                "minScore": 490,
                "minRank": 164672,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-204",
        "collegeId": "gzmtu",
        "code": "204",
        "scoreType": "physics",
        "name": "中外合作办学",
        "kind": "中外合作办学",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 495,
            "minRank": 174104,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 485,
            "minRank": 207016,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外合作办学",
            "history": {
              "2025": {
                "minScore": 495,
                "minRank": 174104,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "计算机科学与技术（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": 129863,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-205",
        "collegeId": "gzmtu",
        "code": "205",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 504,
            "minRank": 141658,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 513,
            "minRank": 140457,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 497,
            "minRank": 185759,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 513,
                "minRank": 140457,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "金融学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": 141658,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-206",
        "collegeId": "gzmtu",
        "code": "206",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2024": {
            "minScore": 495,
            "minRank": 157086,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 493,
            "minRank": 193851,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "交通运输（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "中外合作办学",
            "history": {
              "2025": {
                "minScore": 491,
                "minRank": 180884,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "物流管理（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2024": {
                "minScore": 495,
                "minRank": 157086,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-207",
        "collegeId": "gzmtu",
        "code": "207",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。｜该组类型跨年变动，历史位次仅采用同类型年份",
        "history": {
          "2025": {
            "minScore": 506,
            "minRank": 153254,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 512,
            "minRank": 158735,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 506,
                "minRank": 153254,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "交通运输（中外合作办学）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "中外合作办学",
            "history": {
              "2024": {
                "minScore": 485,
                "minRank": 173995,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2011.htm"
              }
            }
          }
        ]
      },
      {
        "id": "gzmtu-physics-208",
        "collegeId": "gzmtu",
        "code": "208",
        "scoreType": "physics",
        "name": "联合培养",
        "kind": "联合培养",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2025": {
            "minScore": 514,
            "minRank": 139344,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "中外联合培养",
            "history": {
              "2025": {
                "minScore": 514,
                "minRank": 139344,
                "source": "https://zsb.gzmtu.edu.cn/info/1169/2164.htm"
              }
            }
          }
        ]
      }
    ],
    "majorLevels": [
      {
        "name": "航海技术",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202203/09/c6287827.html"
      },
      {
        "name": "轮机工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202203/09/c6287827.html"
      },
      {
        "name": "交通运输",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202203/09/c6287827.html"
      },
      {
        "name": "港口航道与海岸工程",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://static.nfapp.southcn.com/content/202203/09/c6287827.html"
      },
      {
        "name": "船舶与海洋工程",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://static.nfapp.southcn.com/content/202203/09/c6287827.html"
      },
      {
        "name": "交通运输工程（学科群）",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "http://www.gd.gov.cn/zwgk/wjk/qbwj/yfb/content/mpost_3491965.html"
      }
    ]
  },
  {
    "id": "wyu",
    "name": "五邑大学",
    "city": "江门",
    "nature": "公办",
    "type": "综合",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "侨乡特色",
      "硕士学位授予单位"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 507,
          "minRank": 34551,
          "plan": 2,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 493,
          "minRank": 63797,
          "plan": 3,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 493,
          "minRank": 60539,
          "plan": 5,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 499,
          "minRank": 150135,
          "plan": 9,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 484,
          "minRank": 193538,
          "plan": 11,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 478,
          "minRank": 219966,
          "plan": 11,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "wyu-history-210",
        "collegeId": "wyu",
        "code": "210",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为市场营销/旅游管理/建筑学",
        "history": {
          "2024": {
            "minScore": 507,
            "minRank": 34551,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 511,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "建筑学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-history-211",
        "collegeId": "wyu",
        "code": "211",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为日语/商务英语",
        "history": {
          "2024": {
            "minScore": 518,
            "minRank": 28674,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "社会工作",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "汉语言文学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "英语（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5170.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-history-212",
        "collegeId": "wyu",
        "code": "212",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为市场营销/旅游管理/建筑学",
        "history": {
          "2025": {
            "minScore": 536,
            "minRank": 32320,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 539,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 546,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 538,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "建筑学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-history-213",
        "collegeId": "wyu",
        "code": "213",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为社会工作/日语/商务英语",
        "history": {
          "2025": {
            "minScore": 544,
            "minRank": 27418,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "社会工作",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 547,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "汉语言文学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 551,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 544,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "英语（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 548,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-history-214",
        "collegeId": "wyu",
        "code": "214",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "中外联合培养：会计学/英语",
        "history": {
          "2025": {
            "minScore": 493,
            "minRank": 63797,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "会计学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 503,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "英语（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 493,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5740.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-history-216",
        "collegeId": "wyu",
        "code": "216",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为建筑学",
        "history": {
          "2026": {
            "minScore": 527,
            "minRank": 33607,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-history-217",
        "collegeId": "wyu",
        "code": "217",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为社会工作",
        "history": {
          "2026": {
            "minScore": 538,
            "minRank": 26679,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-history-218",
        "collegeId": "wyu",
        "code": "218",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "组内最低分专业为日语/商务英语",
        "history": {
          "2026": {
            "minScore": 535,
            "minRank": 28835,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-history-219",
        "collegeId": "wyu",
        "code": "219",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "中外联合培养：法学/英语",
        "history": {
          "2026": {
            "minScore": 496,
            "minRank": 57692,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-history-220",
        "collegeId": "wyu",
        "code": "220",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "中外联合培养：会计学/金融国际班/中澳班",
        "history": {
          "2026": {
            "minScore": 493,
            "minRank": 60539,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-physics-201",
        "collegeId": "wyu",
        "code": "201",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为纺织工程",
        "history": {
          "2024": {
            "minScore": 499,
            "minRank": 148915,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 507,
            "minRank": 151591,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 513,
            "minRank": 157050,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "制药工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "化学工程与工艺",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "环境工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 516,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 510,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "纺织工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 499,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "应用化学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 508,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-202",
        "collegeId": "wyu",
        "code": "202",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为纺织工程",
        "history": {
          "2024": {
            "minScore": 499,
            "minRank": 149389,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 503,
            "minRank": 159190,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "制药工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 515,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "化学工程与工艺",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 512,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "环境工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 505,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "食品科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 506,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "纺织工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 499,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 503,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "应用化学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 503,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 512,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-203",
        "collegeId": "wyu",
        "code": "203",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为通信工程",
        "history": {
          "2024": {
            "minScore": 521,
            "minRank": 112273,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 526,
            "minRank": 118711,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 539,
            "minRank": 110305,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 543,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 530,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 526,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 529,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 537,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 529,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 540,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "网络工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "数学与应用数学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-204",
        "collegeId": "wyu",
        "code": "204",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为通信工程",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 132511,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 519,
            "minRank": 131453,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "软件工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "电子信息工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 514,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 524,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "通信工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "数据科学与大数据技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 526,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "计算机科学与技术",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 540,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "网络工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 523,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "数学与应用数学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-205",
        "collegeId": "wyu",
        "code": "205",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为纺织工程/工业设计",
        "history": {
          "2024": {
            "minScore": 506,
            "minRank": 136779,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 521,
            "minRank": 127859,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 538,
            "minRank": 112431,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "智能制造工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "机械工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 521,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 537,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "交通工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 506,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 530,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 542,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 528,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 540,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "土木工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 521,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "工业设计",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "智能建造",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 525,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-206",
        "collegeId": "wyu",
        "code": "206",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为工业设计",
        "history": {
          "2024": {
            "minScore": 504,
            "minRank": 140991,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 506,
            "minRank": 153867,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "智能制造工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 526,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "机械工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 516,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 525,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "交通工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 506,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "电气工程及其自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 540,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "自动化",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "土木工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "工业设计",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 505,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 512,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "智能建造",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 507,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "材料科学与工程",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "szdxk"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 509,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-207",
        "collegeId": "wyu",
        "code": "207",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "组内最低分专业为旅游管理/工商管理",
        "history": {
          "2024": {
            "minScore": 517,
            "minRank": 118834,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 518,
            "minRank": 100217,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 538,
            "minRank": 113014,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "数学与应用数学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 537,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "数字经济",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "精算学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "工程管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "信息管理与信息系统",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 524,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              },
              "2025": {
                "minScore": 523,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "国际经济与贸易",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 522,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 527,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 517,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "建筑学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-208",
        "collegeId": "wyu",
        "code": "208",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "组内最低分专业为商务英语/英语",
        "history": {
          "2024": {
            "minScore": 531,
            "minRank": 97738,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 518,
            "minRank": 133378,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "金融学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 524,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "会计学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "市场营销",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 520,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "旅游管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "工商管理",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 523,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "建筑学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 518,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "电子商务",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 519,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 538,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "社会工作",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "010",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 535,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "011",
            "name": "汉语言文学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 543,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "012",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "013",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "014",
            "name": "英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 532,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "015",
            "name": "英语（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-209",
        "collegeId": "wyu",
        "code": "209",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外联合培养项目",
        "history": {
          "2024": {
            "minScore": 499,
            "minRank": 150135,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 531,
            "minRank": 111099,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 520,
            "minRank": 106088,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "法学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 533,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "社会工作",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "003",
            "name": "汉语言文学",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "004",
            "name": "汉语言文学（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 536,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "005",
            "name": "日语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 531,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "006",
            "name": "商务英语",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 532,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "007",
            "name": "英语（师范）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 535,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "008",
            "name": "计算机科学与技术（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 504,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          },
          {
            "code": "009",
            "name": "通信工程（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2024": {
                "minScore": 499,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1042/5180.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-210",
        "collegeId": "wyu",
        "code": "210",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外联合培养：计算机/通信工程",
        "history": {
          "2025": {
            "minScore": 495,
            "minRank": 173849,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 520,
            "minRank": 144995,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "计算机科学与技术（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 500,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "通信工程（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "gjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 495,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-211",
        "collegeId": "wyu",
        "code": "211",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外联合培养：会计学/英语",
        "history": {
          "2025": {
            "minScore": 484,
            "minRank": 193538,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 536,
            "minRank": 115372,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": [
          {
            "code": "001",
            "name": "会计学（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [
              "sjyl"
            ],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 493,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          },
          {
            "code": "002",
            "name": "英语（中外联合培养）",
            "plan": null,
            "years": 4,
            "tuition": null,
            "levels": [],
            "note": "官方未公布分专业最低排位，位次待补",
            "history": {
              "2025": {
                "minScore": 484,
                "minRank": null,
                "source": "https://www.wyu.edu.cn/zsb/info/1025/5750.htm"
              }
            }
          }
        ]
      },
      {
        "id": "wyu-physics-212",
        "collegeId": "wyu",
        "code": "212",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "组内最低分专业为日语",
        "history": {
          "2026": {
            "minScore": 534,
            "minRank": 119021,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-physics-213",
        "collegeId": "wyu",
        "code": "213",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "中外联合培养：计算机/通信/人工智能",
        "history": {
          "2026": {
            "minScore": 478,
            "minRank": 219966,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-physics-214",
        "collegeId": "wyu",
        "code": "214",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外联合培养：法学/英语",
        "history": {
          "2026": {
            "minScore": 487,
            "minRank": 204201,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "wyu-physics-215",
        "collegeId": "wyu",
        "code": "215",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理"
        ],
        "plan": null,
        "note": "中外联合培养：会计学/金融国际班/中澳班",
        "history": {
          "2026": {
            "minScore": 483,
            "minRank": 209901,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      }
    ],
    "majorLevels": [
      {
        "name": "机械工程",
        "levels": [
          "gjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "通信工程",
        "levels": [
          "gjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "计算机科学与技术",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "市场营销",
        "levels": [
          "gjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "数学与应用数学",
        "levels": [
          "gjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "电子商务",
        "levels": [
          "gjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "土木工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "化学工程与工艺",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "环境设计",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "电子信息工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "机械工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "纺织工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "数学与应用数学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "电子商务",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "法学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "社会工作",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "工业设计",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "电气工程及其自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "交通工程",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "建筑学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "工程管理",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "会计学",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "旅游管理",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "机械工程",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "化学工程与工艺",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/zsb/info/1022/2865.htm"
      },
      {
        "name": "信息与通信工程",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      },
      {
        "name": "材料科学与工程",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      },
      {
        "name": "药学",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      },
      {
        "name": "侨乡文化与遗产",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      },
      {
        "name": "轨道交通装备及技术",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      },
      {
        "name": "纺织科学与工程",
        "levels": [
          "szdxk"
        ],
        "year": 2018,
        "source": "https://www.wyu.edu.cn/yjscx/info/1045/6804.htm"
      }
    ]
  },
  {
    "id": "zhku",
    "name": "仲恺农业工程学院",
    "city": "广州",
    "nature": "公办",
    "type": "农林",
    "code": "",
    "codeVerified": false,
    "level": "本科",
    "tags": [
      "省属公办",
      "农工结合"
    ],
    "intro": "",
    "nameNote": "",
    "dataStatus": "official",
    "records": {
      "history": {
        "2024": {
          "minScore": 504,
          "minRank": 36463,
          "plan": 2,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 536,
          "minRank": 32292,
          "plan": 2,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 519,
          "minRank": 39591,
          "plan": 2,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      },
      "physics": {
        "2024": {
          "minScore": 509,
          "minRank": 132071,
          "plan": 4,
          "source": "广东省教育考试院《2024年本科普通类投档情况》"
        },
        "2025": {
          "minScore": 515,
          "minRank": 138007,
          "plan": 4,
          "source": "广东省教育考试院《2025年本科普通类投档情况》"
        },
        "2026": {
          "minScore": 504,
          "minRank": 173878,
          "plan": 4,
          "source": "广东省教育考试院《2026年本科普通类投档情况》"
        }
      }
    },
    "groups": [
      {
        "id": "zhku-history-208",
        "collegeId": "zhku",
        "code": "208",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 504,
            "minRank": 36463,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 537,
            "minRank": 31718,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-history-209",
        "collegeId": "zhku",
        "code": "209",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 508,
            "minRank": 33849,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 536,
            "minRank": 32292,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 519,
            "minRank": 39453,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-history-210",
        "collegeId": "zhku",
        "code": "210",
        "scoreType": "history",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "历史"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2026": {
            "minScore": 519,
            "minRank": 39591,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-202",
        "collegeId": "zhku",
        "code": "202",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 510,
            "minRank": 130777,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 518,
            "minRank": 132909,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 505,
            "minRank": 171234,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-203",
        "collegeId": "zhku",
        "code": "203",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 131971,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 523,
            "minRank": 123659,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 504,
            "minRank": 173878,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-204",
        "collegeId": "zhku",
        "code": "204",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 510,
            "minRank": 130833,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 515,
            "minRank": 138007,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 506,
            "minRank": 170101,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-205",
        "collegeId": "zhku",
        "code": "205",
        "scoreType": "physics",
        "name": "",
        "kind": "普通",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 509,
            "minRank": 132071,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 521,
            "minRank": 128130,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 513,
            "minRank": 156657,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-206",
        "collegeId": "zhku",
        "code": "206",
        "scoreType": "physics",
        "name": "国际班",
        "kind": "国际班",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 491,
            "minRank": 163965,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 497,
            "minRank": 171179,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 498,
            "minRank": 184871,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-207",
        "collegeId": "zhku",
        "code": "207",
        "scoreType": "physics",
        "name": "国际班",
        "kind": "国际班",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2024": {
            "minScore": 498,
            "minRank": 151051,
            "source": "广东省教育考试院《2024年本科普通类投档情况》"
          },
          "2025": {
            "minScore": 491,
            "minRank": 181366,
            "source": "广东省教育考试院《2025年本科普通类投档情况》"
          },
          "2026": {
            "minScore": 484,
            "minRank": 209789,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      },
      {
        "id": "zhku-physics-208",
        "collegeId": "zhku",
        "code": "208",
        "scoreType": "physics",
        "name": "国际班",
        "kind": "国际班",
        "requirePending": false,
        "require": [
          "物理",
          "化学"
        ],
        "plan": null,
        "note": "数据来自广东省教育考试院《本科普通类投档情况》官方表；选科要求按学校公布专业选考科目要求归类，具体以当年《广东省普通高等学校招生专业目录》院校专业组栏为准。",
        "history": {
          "2026": {
            "minScore": 484,
            "minRank": 209788,
            "source": "广东省教育考试院《2026年本科普通类投档情况》"
          }
        },
        "majors": []
      }
    ],
    "majorPool": {
      "physics": [
        {
          "code": "001",
          "name": "国际经济与贸易",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 514,
              "minRank": 123728,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 124286,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "002",
          "name": "农林经济管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 129804,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 520,
              "minRank": 128750,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "003",
          "name": "会展经济与管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130521,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 518,
              "minRank": 132796,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "004",
          "name": "会计学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 523,
              "minRank": 109276,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 527,
              "minRank": 117100,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "005",
          "name": "财务管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 518,
              "minRank": 117692,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 518,
              "minRank": 132909,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "006",
          "name": "人力资源管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 514,
              "minRank": 124478,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 518,
              "minRank": 132729,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "007",
          "name": "工商管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130691,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 518,
              "minRank": 132892,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "008",
          "name": "商务英语",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 516,
              "minRank": 121315,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 525,
              "minRank": 120955,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "009",
          "name": "英语",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 513,
              "minRank": 125435,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 123041,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "010",
          "name": "社会工作",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130249,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123407,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "011",
          "name": "行政管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130699,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 521,
              "minRank": 127280,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "012",
          "name": "草业科学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 129997,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 526,
              "minRank": 118454,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "013",
          "name": "园林",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130833,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 515,
              "minRank": 138007,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "014",
          "name": "林学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131600,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 123043,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "015",
          "name": "园艺",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131879,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 122517,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "016",
          "name": "城乡规划",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 127343,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 518,
              "minRank": 132742,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "017",
          "name": "给排水科学与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 134054,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123588,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "018",
          "name": "生物技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 127449,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123383,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "019",
          "name": "中草药栽培与鉴定",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130516,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123434,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "020",
          "name": "农学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 130891,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123649,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "021",
          "name": "植物保护",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "szdxk"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131400,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 122146,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "022",
          "name": "食品科学与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 517,
              "minRank": 119269,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 527,
              "minRank": 117639,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "023",
          "name": "食品质量与安全",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 127347,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 124356,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "024",
          "name": "包装工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 511,
              "minRank": 129006,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123457,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "025",
          "name": "食品营养与健康",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 132071,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 521,
              "minRank": 128130,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "026",
          "name": "动物医学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 520,
              "minRank": 114304,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 530,
              "minRank": 112117,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "027",
          "name": "水产养殖学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 510,
              "minRank": 131023,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 121785,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "028",
          "name": "动物科学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131663,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 122916,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "029",
          "name": "电子信息工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 532,
              "minRank": 95413,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 540,
              "minRank": 96484,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "030",
          "name": "计算机科学与技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 531,
              "minRank": 97105,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 540,
              "minRank": 96638,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "031",
          "name": "物联网工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 528,
              "minRank": 101853,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 536,
              "minRank": 102354,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "032",
          "name": "数据科学与大数据技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 527,
              "minRank": 102979,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 535,
              "minRank": 104050,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "033",
          "name": "机械设计制造及其自动化",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 526,
              "minRank": 104203,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 539,
              "minRank": 98224,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "034",
          "name": "机械电子工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 526,
              "minRank": 104639,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 538,
              "minRank": 99526,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "035",
          "name": "能源与动力工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 525,
              "minRank": 105952,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 537,
              "minRank": 101089,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "036",
          "name": "农业工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 515,
              "minRank": 121695,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 531,
              "minRank": 110662,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "037",
          "name": "高分子材料与工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 516,
              "minRank": 120648,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 531,
              "minRank": 111193,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "038",
          "name": "化学工程与工艺",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 515,
              "minRank": 121717,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 527,
              "minRank": 117180,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "039",
          "name": "材料化学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 514,
              "minRank": 124623,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 527,
              "minRank": 117134,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "040",
          "name": "应用化学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 126339,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 526,
              "minRank": 118276,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "041",
          "name": "环境工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131828,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123659,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "042",
          "name": "资源环境科学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131831,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 524,
              "minRank": 122213,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "043",
          "name": "土地科学与技术",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 509,
              "minRank": 131850,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 523,
              "minRank": 123598,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "044",
          "name": "信息与计算科学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 521,
              "minRank": 112968,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 532,
              "minRank": 108483,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "045",
          "name": "统计学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 518,
              "minRank": 117087,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 528,
              "minRank": 115075,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "046",
          "name": "电气工程及其自动化",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 531,
              "minRank": 97093,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 542,
              "minRank": 92583,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "047",
          "name": "自动化",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 529,
              "minRank": 100283,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 539,
              "minRank": 97113,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "048",
          "name": "机器人工程",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 524,
              "minRank": 107203,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 536,
              "minRank": 102660,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "049",
          "name": "电气工程及其自动化（国际班）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "中外合作/联合培养（国际班）",
          "history": {
            "2024": {
              "minScore": 501,
              "minRank": 145487,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 503,
              "minRank": 159458,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "050",
          "name": "食品科学与工程（国际班）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "中外合作/联合培养（国际班）",
          "history": {
            "2024": {
              "minScore": 498,
              "minRank": 151051,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 491,
              "minRank": 181366,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "051",
          "name": "土木工程（国际班）",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "中外合作/联合培养（国际班）",
          "history": {
            "2024": {
              "minScore": 491,
              "minRank": 163965,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 497,
              "minRank": 171179,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        }
      ],
      "history": [
        {
          "code": "001",
          "name": "国际经济与贸易",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 505,
              "minRank": 35545,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 542,
              "minRank": 28566,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "002",
          "name": "农林经济管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 505,
              "minRank": 36036,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 539,
              "minRank": 30081,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "003",
          "name": "会展经济与管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 504,
              "minRank": 36418,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 537,
              "minRank": 31288,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "004",
          "name": "会计学",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 518,
              "minRank": 28397,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 548,
              "minRank": 25370,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "005",
          "name": "财务管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 520,
              "minRank": 27323,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 547,
              "minRank": 25458,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "006",
          "name": "人力资源管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 505,
              "minRank": 35927,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 537,
              "minRank": 31662,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "007",
          "name": "工商管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 504,
              "minRank": 36444,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 537,
              "minRank": 31718,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "008",
          "name": "商务英语",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 34030,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 541,
              "minRank": 29367,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "009",
          "name": "英语",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 33896,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 541,
              "minRank": 29035,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "010",
          "name": "社会工作",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 511,
              "minRank": 32247,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 538,
              "minRank": 31133,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "011",
          "name": "行政管理",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 507,
              "minRank": 34899,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 537,
              "minRank": 31702,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "012",
          "name": "园林",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [
            "sjyl"
          ],
          "note": "",
          "history": {
            "2024": {
              "minScore": 508,
              "minRank": 33849,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 536,
              "minRank": 32292,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        },
        {
          "code": "013",
          "name": "城乡规划",
          "plan": null,
          "years": 4,
          "tuition": null,
          "levels": [],
          "note": "",
          "history": {
            "2024": {
              "minScore": 512,
              "minRank": 31838,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            },
            "2025": {
              "minScore": 542,
              "minRank": 28572,
              "source": "https://zsb-portal.zhku.edu.cn/details/article?id=675793"
            }
          }
        }
      ]
    },
    "majorLevels": [
      {
        "name": "植物保护",
        "levels": [
          "gjyl"
        ],
        "year": 2021,
        "source": "https://www.gzucm.edu.cn/info/1291/9041.htm"
      },
      {
        "name": "计算机科学与技术",
        "levels": [
          "gjyl"
        ],
        "year": 2021,
        "source": "https://www.gzucm.edu.cn/info/1291/9041.htm"
      },
      {
        "name": "自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.smu.edu.cn/info/1142/8668.htm"
      },
      {
        "name": "食品科学与工程",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.smu.edu.cn/info/1142/8668.htm"
      },
      {
        "name": "园艺",
        "levels": [
          "sjyl"
        ],
        "year": 2019,
        "source": "https://www.smu.edu.cn/info/1142/8668.htm"
      },
      {
        "name": "食品质量与安全",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "园林",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "环境工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "能源与动力工程",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "生物技术",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "电气工程及其自动化",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "应用化学",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "产品设计",
        "levels": [
          "sjyl"
        ],
        "year": 2021,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "计算机科学与技术",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "植物保护",
        "levels": [
          "sjyl"
        ],
        "year": 2020,
        "source": "https://static.nfapp.southcn.com/content/202306/28/c7839457.html"
      },
      {
        "name": "园艺学",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "http://www.gd.gov.cn/zwgk/wjk/qbwj/yfb/content/mpost_3491965.html"
      },
      {
        "name": "植物保护",
        "levels": [
          "szdxk"
        ],
        "year": 2021,
        "source": "http://www.gd.gov.cn/zwgk/wjk/qbwj/yfb/content/mpost_3491965.html"
      }
    ]
  }
];
