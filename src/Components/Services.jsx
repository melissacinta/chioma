import Headding from './Headding';
import ServicesItem from './ServicesItem';
import ServicesItemSmall from './ServicesItemSmall';

const Services = () => {
  return (
    <section className="section-padding">
      <Headding text="My Services" extraClasses={' text-center'} />
      <div className="flex gap-8 flex-wrap lg:flex-nowrap justify-center">
        <ServicesItem
          index={'01'}
          title={'Accounting'}
          desc={`I offer a comprehensive suite of financial management services honed through over two years of
hands-on experience. My expertise lies in ensuring compliance standards, managing financial cycles,
and driving process improvements for organizational efficiency.`}
        />
        <ServicesItem
          index={'02'}
          title={'Data Analytics'}
          desc={`Armed with a robust foundation in financial management and a specialized skill set in data analysis, I
excel in extracting actionable insights from diverse datasets. I bring forth a unique blend of strategic
analytical expertise and a deep understanding of data to drive organizational success.`}
        />
        <ServicesItem
          index={'03'}
          title={'Content Writer/Novelist'}
          desc={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil dolorum consequatur? Tempora quasi repellendus voluptate ea eos neque. Hic, saepe provident. Incidunt natus quae optio corrupti commodi nisi saepe!'
          }
        />
      </div>
      <Headding text="My Services in Detail" extraClasses={' text-center'} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subServices.map((item, i) => (
          <ServicesItemSmall
            key={i}
            index={`0${i + 1}`}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
const subServices = [
  {
    title: 'Insight Extraction',
    desc: `I utilize Python and SQL for complex query development and data
manipulation, uncovering valuable insights from diverse datasets.`,
  },
  {
    title: 'Visualization & Reporting',
    desc: `I utilize Microsoft Power BI for advanced data visualization and
insights, transforming raw data into actionable information.`,
  },
  {
    title: 'Data Cleaning & Pre-processing',
    desc: `I apply techniques for data cleaning, pre-processing, and
transformation, ensuring data accuracy and relevance`,
  },
  {
    title: 'Strategic Decision Support',
    desc: `I provide top-tier data analysis proficiency, offering actionable
insights for informed decision-making and organizational success`,
  },
  {
    title: 'Financial Management',
    desc: `I efficiently handle journal entries, bank reconciliations, and monthly
ledger activities, ensuring accuracy and compliance.`,
  },
  {
    title: 'Tax Compliance',
    desc: `I prepare and file tax returns including PAY AS YOU EARN, VALUE ADDED TAX,
COMPANY INCOME TAX, and EDUCATION TAX, achieving a 100% compliance rating with tax
authorities.`,
  },
  {
    title: 'Process Streamlining',
    desc: `I oversee complete accounting cycles, optimizing data collection,
analysis, and presentation, resulting in enhanced efficiency by 30%.`,
  },
  {
    title: 'Budget Oversight',
    desc: `I create and refine budget reports, empowering decision-makers with datadriven insights to make informed financial decisions.`,
  },
  {
    title: 'Cost Control',
    desc: `I evaluate operational and financial data, recommending cost-control measures,
resulting in substantial reductions in operational expenses and annual cost savings.`,
  },
];
