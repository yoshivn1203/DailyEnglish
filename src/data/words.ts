import { subDays } from 'date-fns'

// Comprehensive data structure with 10 days of words
export const wordsByDay = [
  {
    date: new Date(), // Today
    words: [
      {
        id: 1,
        english: 'meticulous',
        vietnamese: 'tỉ mỉ, cẩn thận',
        example: 'She is meticulous about keeping her financial records organized.'
      },
      {
        id: 2,
        english: 'resilient',
        vietnamese: 'dẻo dai, kiên cường',
        example: 'The community proved resilient in the face of economic hardship.'
      },
      {
        id: 3,
        english: 'ambiguous',
        vietnamese: 'mơ hồ, không rõ ràng',
        example: 'His ambiguous response left us unsure about his intentions.'
      },
      {
        id: 4,
        english: 'pragmatic',
        vietnamese: 'thực tế, thiết thực',
        example: 'We need a pragmatic approach to solving this problem.'
      },
      {
        id: 5,
        english: 'eloquent',
        vietnamese: 'hùng biện, lưu loát',
        example: 'Her eloquent speech moved the entire audience.'
      },
      {
        id: 6,
        english: 'diligent',
        vietnamese: 'chăm chỉ, cần cù',
        example: 'His diligent study habits helped him excel in all subjects.'
      },
      {
        id: 7,
        english: 'versatile',
        vietnamese: 'đa năng, linh hoạt',
        example: 'This versatile tool can be used for many different tasks.'
      },
      {
        id: 8,
        english: 'profound',
        vietnamese: 'sâu sắc, thâm thúy',
        example: 'The book offers profound insights into human psychology.'
      },
      {
        id: 9,
        english: 'meticulous',
        vietnamese: 'tỉ mỉ, cẩn thận',
        example: 'The detective was meticulous in examining every piece of evidence.'
      },
      {
        id: 10,
        english: 'innovative',
        vietnamese: 'đổi mới, sáng tạo',
        example: 'The company is known for its innovative approach to product design.'
      }
    ]
  },
  {
    date: subDays(new Date(), 1), // Yesterday
    words: [
      {
        id: 1,
        english: 'articulate',
        vietnamese: 'nói năng lưu loát, rõ ràng',
        example: 'She is an articulate speaker who can explain complex ideas clearly.'
      },
      {
        id: 2,
        english: 'nuance',
        vietnamese: 'sắc thái, nét tinh tế',
        example: 'The translation missed some of the nuances of the original text.'
      },
      {
        id: 3,
        english: 'persevere',
        vietnamese: 'kiên trì, bền bỉ',
        example: 'You must persevere if you want to master a musical instrument.'
      },
      {
        id: 4,
        english: 'scrutinize',
        vietnamese: 'xem xét kỹ lưỡng',
        example: 'The committee will scrutinize each application carefully.'
      },
      {
        id: 5,
        english: 'arbitrary',
        vietnamese: 'tùy tiện, độc đoán',
        example: 'The decision seemed arbitrary rather than based on clear criteria.'
      },
      {
        id: 6,
        english: 'concise',
        vietnamese: 'ngắn gọn, súc tích',
        example: 'Please keep your report concise and to the point.'
      },
      {
        id: 7,
        english: 'empathy',
        vietnamese: 'sự đồng cảm',
        example: 'Doctors need to show empathy when dealing with patients.'
      },
      {
        id: 8,
        english: 'intricate',
        vietnamese: 'phức tạp, tinh vi',
        example: 'The watch has an intricate mechanism with many tiny parts.'
      },
      {
        id: 9,
        english: 'prudent',
        vietnamese: 'thận trọng, sáng suốt',
        example: "It's prudent to save some money for emergencies."
      },
      {
        id: 10,
        english: 'skeptical',
        vietnamese: 'hoài nghi, ngờ vực',
        example: "She remained skeptical about the new treatment's effectiveness."
      }
    ]
  },
  {
    date: subDays(new Date(), 2),
    words: [
      {
        id: 1,
        english: 'dilemma',
        vietnamese: 'tình thế khó xử',
        example: 'He faced a dilemma: accept the promotion or stay in a job he loved.'
      },
      {
        id: 2,
        english: 'elaborate',
        vietnamese: 'phức tạp, tỉ mỉ',
        example: 'The palace features elaborate decorations and intricate carvings.'
      },
      {
        id: 3,
        english: 'facilitate',
        vietnamese: 'tạo điều kiện, làm cho dễ dàng',
        example: 'The new software is designed to facilitate communication between teams.'
      },
      {
        id: 4,
        english: 'imperative',
        vietnamese: 'bắt buộc, cấp thiết',
        example: 'It is imperative that we finish this project before the deadline.'
      },
      {
        id: 5,
        english: 'lucid',
        vietnamese: 'rõ ràng, sáng sủa',
        example: 'Even in his old age, he maintained a lucid mind.'
      },
      {
        id: 6,
        english: 'obsolete',
        vietnamese: 'lỗi thời, không còn dùng',
        example: 'This technology will soon become obsolete as newer versions emerge.'
      },
      {
        id: 7,
        english: 'pertinent',
        vietnamese: 'thích hợp, liên quan',
        example: 'Please only share information that is pertinent to the case.'
      },
      {
        id: 8,
        english: 'reluctant',
        vietnamese: 'miễn cưỡng, không muốn',
        example: 'She was reluctant to share her personal experiences with strangers.'
      },
      {
        id: 9,
        english: 'substantial',
        vietnamese: 'đáng kể, quan trọng',
        example: 'The project requires a substantial investment of time and money.'
      },
      {
        id: 10,
        english: 'transparent',
        vietnamese: 'minh bạch, rõ ràng',
        example: 'The company promises to be transparent about its environmental impact.'
      }
    ]
  },
  {
    date: subDays(new Date(), 3),
    words: [
      {
        id: 1,
        english: 'advocate',
        vietnamese: 'ủng hộ, biện hộ',
        example: 'She advocates for better healthcare in underserved communities.'
      },
      {
        id: 2,
        english: 'consensus',
        vietnamese: 'sự đồng thuận',
        example: 'The team reached a consensus after hours of discussion.'
      },
      {
        id: 3,
        english: 'deteriorate',
        vietnamese: 'xấu đi, suy thoái',
        example: 'His health began to deteriorate rapidly after the diagnosis.'
      },
      {
        id: 4,
        english: 'enhance',
        vietnamese: 'nâng cao, cải thiện',
        example: 'These exercises will enhance your strength and flexibility.'
      },
      {
        id: 5,
        english: 'feasible',
        vietnamese: 'khả thi, có thể thực hiện',
        example: 'The engineers determined that the project was financially feasible.'
      },
      {
        id: 6,
        english: 'implicit',
        vietnamese: 'ngầm, ẩn ý',
        example: 'There was an implicit agreement that no one would discuss the matter.'
      },
      {
        id: 7,
        english: 'leverage',
        vietnamese: 'tận dụng, đòn bẩy',
        example: 'We can leverage our existing customer base to promote the new product.'
      },
      {
        id: 8,
        english: 'mitigate',
        vietnamese: 'giảm nhẹ, làm dịu',
        example: 'The company took steps to mitigate the environmental damage.'
      },
      {
        id: 9,
        english: 'prevalent',
        vietnamese: 'phổ biến, thịnh hành',
        example: 'This disease is particularly prevalent among older adults.'
      },
      {
        id: 10,
        english: 'robust',
        vietnamese: 'mạnh mẽ, vững chắc',
        example: 'We need a robust system that can handle high volumes of traffic.'
      }
    ]
  },
  {
    date: subDays(new Date(), 4),
    words: [
      {
        id: 1,
        english: 'ambivalent',
        vietnamese: 'lưỡng lự, có cảm xúc trái ngược',
        example: 'She felt ambivalent about moving to a new city for the job.'
      },
      {
        id: 2,
        english: 'benevolent',
        vietnamese: 'nhân từ, tốt bụng',
        example: 'The benevolent donor wished to remain anonymous.'
      },
      {
        id: 3,
        english: 'comprehensive',
        vietnamese: 'toàn diện, đầy đủ',
        example: 'The report provides a comprehensive analysis of market trends.'
      },
      {
        id: 4,
        english: 'discrepancy',
        vietnamese: 'sự khác biệt, mâu thuẫn',
        example: "There's a discrepancy between the two accounts of what happened."
      },
      {
        id: 5,
        english: 'exemplify',
        vietnamese: 'minh họa, làm gương',
        example: "Her actions exemplify the company's commitment to customer service."
      },
      {
        id: 6,
        english: 'fluctuate',
        vietnamese: 'dao động, biến động',
        example: 'Stock prices tend to fluctuate based on market conditions.'
      },
      {
        id: 7,
        english: 'hypothetical',
        vietnamese: 'giả thuyết, giả định',
        example: "Let's consider a hypothetical situation where the project fails."
      },
      {
        id: 8,
        english: 'integrity',
        vietnamese: 'tính chính trực, liêm chính',
        example: 'His integrity was never questioned throughout his career.'
      },
      {
        id: 9,
        english: 'jurisdiction',
        vietnamese: 'quyền tài phán, thẩm quyền',
        example: 'This case falls under the jurisdiction of the federal court.'
      },
      {
        id: 10,
        english: 'legitimate',
        vietnamese: 'hợp pháp, chính đáng',
        example: 'She raised legitimate concerns about the safety of the procedure.'
      }
    ]
  },
  {
    date: subDays(new Date(), 5),
    words: [
      {
        id: 1,
        english: 'accommodate',
        vietnamese: 'điều chỉnh, thích nghi',
        example: 'The hotel can accommodate up to 200 guests for the conference.'
      },
      {
        id: 2,
        english: 'brevity',
        vietnamese: 'sự ngắn gọn, súc tích',
        example: 'The speaker was known for his brevity and powerful messages.'
      },
      {
        id: 3,
        english: 'coherent',
        vietnamese: 'mạch lạc, liên kết',
        example: 'She presented a coherent argument that convinced the committee.'
      },
      {
        id: 4,
        english: 'delegate',
        vietnamese: 'ủy thác, giao phó',
        example: 'A good manager knows when to delegate responsibilities to team members.'
      },
      {
        id: 5,
        english: 'empirical',
        vietnamese: 'thực nghiệm, dựa trên kinh nghiệm',
        example: 'The study provides empirical evidence to support the theory.'
      },
      {
        id: 6,
        english: 'frugal',
        vietnamese: 'tiết kiệm, không hoang phí',
        example: 'Living a frugal lifestyle helped them save for early retirement.'
      },
      {
        id: 7,
        english: 'gratify',
        vietnamese: 'làm hài lòng, thỏa mãn',
        example: 'It was gratifying to see the positive impact of our work.'
      },
      {
        id: 8,
        english: 'hierarchy',
        vietnamese: 'hệ thống cấp bậc',
        example: 'The company has a clear hierarchy with well-defined roles.'
      },
      {
        id: 9,
        english: 'incentive',
        vietnamese: 'động lực, khuyến khích',
        example: 'The bonus serves as an incentive for employees to exceed their targets.'
      },
      {
        id: 10,
        english: 'juxtapose',
        vietnamese: 'đặt cạnh nhau, so sánh',
        example: 'The exhibition juxtaposes traditional and modern art styles.'
      }
    ]
  },
  {
    date: subDays(new Date(), 6),
    words: [
      {
        id: 1,
        english: 'analogy',
        vietnamese: 'sự tương tự, so sánh',
        example: 'He used an analogy to explain the complex scientific concept.'
      },
      {
        id: 2,
        english: 'bias',
        vietnamese: 'thành kiến, thiên vị',
        example: 'Journalists should report news without bias or personal opinion.'
      },
      {
        id: 3,
        english: 'concurrent',
        vietnamese: 'đồng thời, song song',
        example: 'The company is working on several concurrent projects.'
      },
      {
        id: 4,
        english: 'deficient',
        vietnamese: 'thiếu, không đầy đủ',
        example: 'The soil is deficient in essential nutrients for growing vegetables.'
      },
      {
        id: 5,
        english: 'enigma',
        vietnamese: 'điều bí ẩn, câu đố',
        example: 'The origin of the ancient structure remains an enigma to archaeologists.'
      },
      {
        id: 6,
        english: 'fallacy',
        vietnamese: 'ngụy biện, sai lầm',
        example: "It's a common fallacy that wealth always brings happiness."
      },
      {
        id: 7,
        english: 'generic',
        vietnamese: 'chung chung, không đặc trưng',
        example: 'The report contained only generic recommendations, not specific actions.'
      },
      {
        id: 8,
        english: 'holistic',
        vietnamese: 'toàn diện, tổng thể',
        example: 'We take a holistic approach to health, considering mind and body.'
      },
      {
        id: 9,
        english: 'imminent',
        vietnamese: 'sắp xảy ra, cận kề',
        example: 'The storm is imminent; we should seek shelter immediately.'
      },
      {
        id: 10,
        english: 'jargon',
        vietnamese: 'biệt ngữ, thuật ngữ chuyên môn',
        example: 'The report was full of technical jargon that confused non-specialists.'
      }
    ]
  },
  {
    date: subDays(new Date(), 7),
    words: [
      {
        id: 1,
        english: 'adamant',
        vietnamese: 'kiên quyết, không lay chuyển',
        example: 'She was adamant about not changing the project deadline.'
      },
      {
        id: 2,
        english: 'banal',
        vietnamese: 'tầm thường, sáo rỗng',
        example: 'The speech was filled with banal observations about success.'
      },
      {
        id: 3,
        english: 'catalyst',
        vietnamese: 'chất xúc tác, yếu tố thúc đẩy',
        example: 'Her research served as a catalyst for new developments in the field.'
      },
      {
        id: 4,
        english: 'daunting',
        vietnamese: 'đáng nản lòng, khó khăn',
        example: 'The task of renovating the entire house seemed daunting at first.'
      },
      {
        id: 5,
        english: 'elusive',
        vietnamese: 'khó nắm bắt, khó hiểu',
        example: 'Success remained elusive despite his best efforts.'
      },
      {
        id: 6,
        english: 'facade',
        vietnamese: 'mặt tiền, vẻ bề ngoài',
        example: 'Behind his cheerful facade, he was dealing with serious problems.'
      },
      {
        id: 7,
        english: 'galvanize',
        vietnamese: 'kích thích, thúc đẩy',
        example: 'Her speech galvanized the team into taking immediate action.'
      },
      {
        id: 8,
        english: 'haphazard',
        vietnamese: 'ngẫu nhiên, lộn xộn',
        example: 'The documents were arranged in a haphazard manner on the desk.'
      },
      {
        id: 9,
        english: 'impeccable',
        vietnamese: 'hoàn hảo, không tì vết',
        example: 'He has an impeccable record of customer service.'
      },
      {
        id: 10,
        english: 'judiciously',
        vietnamese: 'thận trọng, sáng suốt',
        example: 'We must use our limited resources judiciously.'
      }
    ]
  },
  {
    date: subDays(new Date(), 8),
    words: [
      {
        id: 1,
        english: 'alleviate',
        vietnamese: 'giảm nhẹ, làm dịu',
        example: 'The medication should alleviate the symptoms within an hour.'
      },
      {
        id: 2,
        english: 'burgeon',
        vietnamese: 'phát triển nhanh, nở rộ',
        example: 'The tech industry has burgeoned in this region over the past decade.'
      },
      {
        id: 3,
        english: 'conundrum',
        vietnamese: 'câu đố, vấn đề khó',
        example: 'The team faced a conundrum: how to increase quality while reducing costs.'
      },
      {
        id: 4,
        english: 'disparity',
        vietnamese: 'sự chênh lệch, khác biệt',
        example: "There's a significant disparity in income between the two regions."
      },
      {
        id: 5,
        english: 'ephemeral',
        vietnamese: 'ngắn ngủi, tạm thời',
        example: 'Fame can be ephemeral, especially in the entertainment industry.'
      },
      {
        id: 6,
        english: 'fathom',
        vietnamese: 'hiểu thấu, lĩnh hội',
        example: 'I cannot fathom why anyone would make such a risky decision.'
      },
      {
        id: 7,
        english: 'germane',
        vietnamese: 'liên quan, thích hợp',
        example: 'His comments were not germane to the topic under discussion.'
      },
      {
        id: 8,
        english: 'harbinger',
        vietnamese: 'điềm báo, người báo trước',
        example: 'The first few drops of rain were a harbinger of the storm to come.'
      },
      {
        id: 9,
        english: 'idiosyncrasy',
        vietnamese: 'đặc điểm riêng, tính cách đặc biệt',
        example: 'One of his idiosyncrasies is always arranging his pens by color.'
      },
      {
        id: 10,
        english: 'judicious',
        vietnamese: 'sáng suốt, khôn ngoan',
        example: 'Making judicious investments is key to long-term financial security.'
      }
    ]
  },
  {
    date: subDays(new Date(), 9),
    words: [
      {
        id: 1,
        english: 'astute',
        vietnamese: 'sắc sảo, tinh tường',
        example: 'Her astute observations helped identify the root of the problem.'
      },
      {
        id: 2,
        english: 'belligerent',
        vietnamese: 'hiếu chiến, hung hăng',
        example: 'The belligerent customer refused to calm down despite our efforts.'
      },
      {
        id: 3,
        english: 'cacophony',
        vietnamese: 'âm thanh hỗn tạp, chói tai',
        example: 'The cacophony of car horns made it impossible to concentrate.'
      },
      {
        id: 4,
        english: 'dichotomy',
        vietnamese: 'sự phân đôi, đối lập',
        example: "There's a clear dichotomy between what he says and what he does."
      },
      {
        id: 5,
        english: 'egregious',
        vietnamese: 'quá đáng, tệ hại',
        example: 'The report highlighted several egregious violations of safety protocols.'
      },
      {
        id: 6,
        english: 'fastidious',
        vietnamese: 'kỹ tính, cầu toàn',
        example: 'He is fastidious about keeping his workspace organized.'
      },
      {
        id: 7,
        english: 'garrulous',
        vietnamese: 'lắm lời, nói nhiều',
        example: 'The garrulous tour guide barely paused for breath during the entire tour.'
      },
      {
        id: 8,
        english: 'hedonistic',
        vietnamese: 'theo chủ nghĩa khoái lạc',
        example: 'The resort caters to those seeking a hedonistic vacation experience.'
      },
      {
        id: 9,
        english: 'iconoclast',
        vietnamese: 'người phá vỡ truyền thống',
        example: 'As an iconoclast in the art world, she challenged conventional techniques.'
      },
      {
        id: 10,
        english: 'jubilant',
        vietnamese: 'hân hoan, vui mừng',
        example: 'The team was jubilant after winning the championship.'
      }
    ]
  }
]
