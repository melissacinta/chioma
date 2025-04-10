import { MdCloudUpload } from 'react-icons/md';
import Headding from './Headding';

const Cta = () => {
  return (
    <div className="bg-primary/10 section-padding">
      <Headding
        text="Unveiling Excellence in Financial Management and Data analytics"
        extraClasses={'text-center'}
      />
      <p>
        I am a meticulous Accountant with over two years of expertise in
        financial management, coupled with a strong focus on Data Analysis.
        Proficient in Python, MySQL, Microsoft Excel, Microsoft Power
        BI,PowerPoint, QuickBooks, SAGE 50, Zoho Books and Google Spreadsheets.
        I am adept at complex data manipulation and visualization and I
        specialize in extracting crucial insights from complex data. I offer
        top-tier data analysis proficiency for organizational success by
        leveraging my analytical expertise and data-driven insights,
        amalgamating my financial acumen with a deep understanding of data. I
        have contributed to significant improvements in client satisfaction,
        sales revenue, and operational efficiency, demonstrating my ability to
        drive tangible results. I find joy in analysing complex datasets,
        uncovering trends, and providing actionable insights that contribute to
        operational efficiency and organizational success. Download my
        Curriculum Vitae (CV) to learn more.
      </p>
      <a
        href="https://drive.google.com/file/d/1nzyS9VEG_dYlSCSktDz37PaycwyIR8q0/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
      >
        <MdCloudUpload /> CHECKOUT MY CV
      </a>
    </div>
  );
};

export default Cta;
