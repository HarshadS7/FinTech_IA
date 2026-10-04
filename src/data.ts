export const NAV = [
  ['home', 'Overview'], ['timeline', 'Timeline'], ['notes', 'Notes'], ['stakeholders', 'Stakeholders'],
  ['fintech', 'FinTech'], ['analysis', 'Analysis'], ['quiz', 'Quiz'], ['sources', 'Sources'],
]

export const EVENTS = [
  { year: '1946', kind: 'Demonetisation', date: '12 Jan 1946', notes: '₹500 · ₹1,000 · ₹10,000',
    blurb: '₹500, ₹1,000 and ₹10,000 withdrawn.',
    steps: [
      ['Before', 'High-denomination notes were in circulation.'],
      ['What happened', '12 January 1946: ₹500, ₹1,000 and ₹10,000 lost legal-tender status.'],
      ['Immediate impact', 'The stated objective concerned unaccounted money and tax evasion.'],
      ['After', 'High denominations were later reintroduced. In 1954 the ₹1,000 returned, ₹5,000 was introduced and ₹10,000 returned.'],
    ] },
  { year: '1978', kind: 'Demonetisation', date: '16 Jan 1978', notes: '₹1,000 · ₹5,000 · ₹10,000',
    blurb: '₹1,000, ₹5,000 and ₹10,000 demonetised.',
    steps: [
      ['Before', 'These were high-value notes in the currency system.'],
      ['What happened', '16 January 1978: ₹1,000, ₹5,000 and ₹10,000 were demonetised.'],
      ['Immediate impact', 'The stated objective concerned illicit transfers and transactions harmful to the national economy or for illegal purposes.'],
      ['After', 'High denominations were removed. The ₹1,000 note later returned to India\'s currency system.'],
    ] },
  { year: '2016', kind: 'Demonetisation', date: '8 Nov 2016', notes: '₹500 · ₹1,000', big: true,
    blurb: '₹500 and ₹1,000 withdrawn. New ₹500 and ₹2,000 notes introduced.',
    steps: [
      ['Before', 'The ₹500 and ₹1,000 notes made up about 86% of the value of currency in circulation (Economic Survey 2016–17).'],
      ['What happened', '8 November 2016: the Government announced that existing ₹500 and ₹1,000 notes would lose legal-tender status from midnight.'],
      ['Immediate impact', 'Banks closed briefly, then handled deposits and exchange. Withdrawal limits, ATM recalibration, queues and cash shortages shaped the weeks that followed.'],
      ['After', 'New ₹500 and ₹2,000 notes were introduced; ₹200 and other new-series notes followed in 2017. Cash circulation gradually normalised while cards, wallets, UPI and QR developed alongside it.'],
    ] },
  { year: '2023', kind: 'Withdrawal, not demonetisation', date: '19 May 2023', notes: '₹2,000', amber: true,
    blurb: '₹2,000 withdrawn from circulation. It remained legal tender.',
    steps: [
      ['Before', 'The ₹2,000 note had been introduced in 2016; printing stopped in 2018–19.'],
      ['What happened', '19 May 2023: RBI announced the withdrawal of ₹2,000 notes from circulation. The note remained legal tender.'],
      ['Immediate impact', 'Public could deposit or exchange notes at banks; the original deadline was 30 Sept 2023, extended to 7 Oct 2023.'],
      ['After', 'From 8 Oct 2023 normal branch deposit/exchange ended; RBI Issue Offices continued specified services. By 31 Dec 2024, 98.12% of the value outstanding on 19 May 2023 had returned.'],
    ] },
]

export const T2016 = [
  ['8 Nov', 'Announcement', 'Legal-tender status of ₹500 and ₹1,000 withdrawn from midnight.'],
  ['9 Nov', 'Banks closed', 'Banks temporarily closed for normal operations while preparing.'],
  ['10 Nov', 'Deposits begin', 'Banks reopened; deposit and exchange began under announced rules.'],
  ['Nov–Dec', 'Transition', 'Withdrawal limits, ATM recalibration, queues and cash shortages.'],
  ['30 Dec', 'Window ends', 'Main deposit window ended.'],
]
export const T2023 = [
  ['19 May', 'Announced', 'RBI announces withdrawal of ₹2,000 notes.'],
  ['30 Sep', 'Deadline', 'Original deposit/exchange deadline.'],
  ['7 Oct', 'Extended', 'Extended bank facility.'],
  ['8 Oct', 'Branches end', 'Normal bank-branch deposit/exchange ended.'],
  ['After', 'Issue Offices', 'RBI Issue Offices continued specified services.'],
]

export const NOTES = [
  { v: '₹10,000', c: '#8b5cf6', ev: ['1946', '1978'], t: 'Withdrawn in 1946 and again in 1978.' },
  { v: '₹5,000', c: '#ec4899', ev: ['1978'], t: 'Introduced 1954; demonetised 1978.' },
  { v: '₹1,000', c: '#3b82f6', ev: ['1946', '1978', '2016'], t: 'Withdrawn three times; returned after 1946 and 1978.' },
  { v: '₹500', c: '#10b981', ev: ['1946', '2016'], t: 'Old ₹500 withdrawn in 2016; new ₹500 issued.' },
  { v: '₹2,000', c: '#f59e0b', ev: ['2016', '2023'], t: 'Introduced 2016; printing stopped 2018–19; withdrawn 2023 but stayed legal tender.' },
  { v: '₹200', c: '#f97316', ev: ['2017'], t: 'New-series note introduced in 2017.' },
]

export const STAKEHOLDERS = [
  { id: 'person', name: 'Normal person', icon: '🧑',
    Before: 'Cash was heavily used for everyday transactions.',
    '2016': ['Difficulty accessing usable cash, queues and withdrawal limits.', 'Need to deposit or exchange old notes.', 'Difficulty with some cash purchases.', 'Impact depended on access to banks and ATMs, location, digital payment availability and cash dependence.'],
    After: 'Cash availability gradually normalised; cards, wallets, UPI and other digital channels continued alongside cash.' },
  { id: 'merchant', name: 'Merchant', icon: '🏪',
    Before: 'Many small merchants depended heavily on cash.',
    '2016': ['Customers held invalid old notes and cash purchases fell.', 'Payment delays and cash-flow problems were possible.', 'Merchants accepting cards, wallets or QR payments had alternative channels.'],
    After: 'Digital acceptance became increasingly useful while cash remained important.' },
  { id: 'rural', name: 'Rural / cash-dependent worker', icon: '🌾',
    Before: 'Cash wages and local cash-based commerce were common.',
    '2016': ['Effects varied with access to banks, ATMs, connectivity and digital infrastructure.', 'Possible short-term disruption to cash wages, purchases, informal activity and local commerce.', 'Not every rural person was affected identically.'],
    After: 'Recovery and adaptation again depended on banking access and local infrastructure.' },
  { id: 'bank', name: 'Bank', icon: '🏦',
    Before: 'Normal cash handling and ATM operations.',
    '2016': ['Very high operational load: deposit and exchange of old notes.', 'Counting cash, distributing new notes and managing liquidity.', 'Recalibrating ATMs and handling queues.'],
    After: 'Cash circulation normalised and digital banking channels continued developing.' },
  { id: 'cash', name: 'Cash-intensive / high-income group', icon: '💼',
    Before: 'Cash holdings varied widely by person and business.',
    '2016': ['Impact depended on the amount of cash held, the nature/source of funds, and the ability to deposit and explain them.', 'Possible effects: large cash deposits, documentation, banking records and compliance/tax implications.'],
    After: 'More transactions and deposits sat in banking records.',
    warn: 'Wealth, cash holdings and illegal money are not the same thing.' },
  { id: 'gov', name: 'Government', icon: '🏛',
    Before: 'Cash-heavy economy with a large share of value in high-denomination notes.',
    '2016': ['Stated objectives: unaccounted money, counterfeit currency, illicit use of high-denomination notes, formalisation/digitalisation, tax compliance.', 'Immediate operations: printing and distributing new notes, bank and ATM logistics, deposit/exchange rules.'],
    After: 'Open questions: how much unaccounted money was addressed, how much digital growth is attributable to demonetisation versus other factors, and the effect on formalisation.' },
]

export const MATRIX = [
  ['Normal person', 'High if cash-dependent', 'Medium', 'Varied', 'Cash dependence'],
  ['Small merchant', 'High if cash-heavy', 'Medium', 'Potentially useful', 'Payment acceptance'],
  ['Rural / cash-dependent worker', 'Potentially high', 'Medium', 'Access-dependent', 'Infrastructure'],
  ['Bank', 'Very high operational load', 'Very high', 'Continued', 'Cash logistics'],
  ['Cash-intensive / high-income', 'Depends on cash held', 'Compliance relevance', 'Alternative channels', 'Nature of funds'],
  ['Government', 'System-wide', 'High administrative load', 'Infrastructure / policy', 'Objectives and trade-offs'],
]
export const MATRIX_HEAD = ['Stakeholder', 'Cash disruption', 'Banking impact', 'Digital adaptation', 'Key variable']

export const QBARS = [['Normal person', 50], ['Small merchant', 50], ['Rural / cash-dependent', 50], ['Bank', 95], ['Cash-intensive', 65], ['Government', 75]]

export const FLOW = [
  ['Cash economy', '💵', 'Physical currency was heavily used.'],
  ['2016 shock', '⚡', '₹500 and ₹1,000 lost legal-tender status.'],
  ['Banking system', '🏦', 'Deposits, withdrawals, liquidity and ATM operations.'],
  ['Digital options', '📱', 'Cards, wallets, UPI and QR payments.'],
  ['New habits', '🔁', 'Multiple payment channels alongside cash.'],
]

export const WHY = [
  ['Payment infrastructure', 'Rails like cards, UPI and QR.'],
  ['Banking access', 'Who can reach a branch, ATM or account.'],
  ['Liquidity', 'Getting usable cash to where it is needed.'],
  ['Digital channels', 'Alternatives when cash is constrained.'],
  ['Financial inclusion', 'Access differs across people and places.'],
  ['Formalisation', 'Flows moving into the banking system.'],
  ['Transaction records', 'Digital payments leave a data trail.'],
]

export const LENSES = [
  ['💵', 'Cash', 'Immediate availability and cash dependence.'],
  ['🏦', 'Banking', 'Deposits, withdrawals, queues, liquidity and ATM operations.'],
  ['📱', 'Digital payments', 'Cards, wallets, UPI and QR.'],
  ['🛒', 'Business activity', 'Sales, wages and cash-intensive activity.'],
  ['📑', 'Formalisation', 'Financial flows entering the banking system.'],
  ['🪙', 'Currency', 'New denominations, ATM recalibration and distribution.'],
]

export const GOV = [
  ['Stated objectives', ['Unaccounted money', 'Counterfeit currency', 'Illicit use of high-denomination notes', 'Formalisation / digitalisation', 'Tax compliance']],
  ['Immediate operations', ['Printing and distributing new notes', 'Bank and ATM logistics', 'Deposit / exchange rules']],
  ['Longer-term questions', ['How much unaccounted money was addressed?', 'How much digital growth is due to demonetisation vs other factors?', 'Effect on formalisation']],
]

export const SOURCES = [
  ['Reserve Bank of India', 'Currency history, demonetisation and ₹2,000 withdrawal information.', 'https://www.rbi.org.in'],
  ['Economic Survey 2016–17', 'Currency, cash economy and short-term impact analysis.', 'https://www.indiabudget.gov.in/economicsurvey/'],
  ['NPCI', 'UPI milestone history and statistics.', 'https://www.npci.org.in'],
  ['RBI Annual Report 2017–18 (via press coverage)', '₹15.31 lakh crore of ₹15.41 lakh crore returned (99.3%).', 'https://www.businesstoday.in/latest/economy-politics/story/rbi-says-99pc-demonetised-notes-were-returned-10-major-points-108971-2018-08-29'],
  ['PIB: UPI completes 10 years', 'UPI scale and growth context.', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2257087&reg=3&lang=2'],
]

export const QUIZ = [
  ['Which of these was NOT a demonetisation?', ['1946', '1978', '2016', '2023 ₹2,000 withdrawal'], 3, 'In 2023 the ₹2,000 note stayed legal tender, so it was a withdrawal from circulation.'],
  ['What share of currency value did ₹500 and ₹1,000 notes hold before 8 Nov 2016?', ['About 14%', 'About 50%', 'About 86%', 'About 99%'], 2, 'About 86% by value (Economic Survey 2016–17).'],
  ['Which group carried the biggest operational load in 2016?', ['Banks', 'Merchants', 'Students', 'Tourists'], 0, 'Banks handled exchange, counting, new-note distribution, liquidity, ATM recalibration and queues.'],
  ['When did UPI go live?', ['After demonetisation, Dec 2016', 'August 2016', 'January 2018', '2019'], 1, 'UPI was piloted in April 2016 and went live in August 2016, so digital growth is not solely due to demonetisation.'],
  ['Which statement is correct?', ['Wealth equals black money', 'Everyone was affected identically', 'Impact depended on access, location and cash dependence', 'Demonetisation alone caused all digital growth'], 2, 'Impact varied by bank/ATM access, location, digital availability and cash dependence.'],
]
