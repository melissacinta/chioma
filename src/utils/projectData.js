import medical1 from '@assets/images/projects/medical-1.png';
import medical2 from '@assets/images/projects/medical-2.png';
import page1 from '@assets/images/projects/page-view-1.png';
import page2 from '@assets/images/projects/page-view-2.png';
import page3 from '@assets/images/projects/page-view-3.png';
import sea1 from '@assets/images/projects/sea-level-1.png';
import sea2 from '@assets/images/projects/sea-level-2.png';
import sea3 from '@assets/images/projects/sea-level-3.png';
import absenteeism from '@assets/images/projects/absenteeism-report-1.png';
import data from '@assets/images/projects/data-professional-survey-1.png';
import stores from '@assets/images/projects/Superstore-profit-1.png';
import bike from '@assets/images/projects/Bike-sales-dashboard.png';

export const projects = [
  {
    projectName: 'Mean-Variance-Standard Deviation Calculator',
    projectOverview:
      'I showcase my Python programming and statistical knowledge by creating a user-friendly Mean, Variance, and Standard Deviation Calculator.',
    'Key Responsibilities': [
      {
        Responsibility: 'Statistical Calculations',
        Description:
          'Developed a tool that computes mean, variance, standard deviation, minimum, maximum, and sum for a 3x3 matrix of user-input integers.',
      },
      {
        Responsibility: 'User-Friendly Data Input',
        Description:
          'Implemented a system allowing users to input nine integers separated by spaces, with error handling for valid data entry.',
      },
      {
        Responsibility: 'Comprehensive Output',
        Description:
          'Presents results in a dictionary format, enabling analysis across rows, columns, and the entire matrix.',
      },
      {
        Responsibility: 'Efficient and Simple Code',
        Description:
          'Utilized NumPy library functions for calculations and maintained a concise code structure.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Applying Statistical Analysis in Python',
        Description:
          'Proficiency in utilizing statistical concepts through Python programming.',
      },
      {
        Ability: 'Developing User-Friendly Data Analysis Tools',
        Description:
          'Designing tools that are accessible and easy to use for data analysis.',
      },
      {
        Ability: 'Clear and Concise Communication of Insights',
        Description:
          'Effectively communicating the statistical findings from the tool.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Analyzing Financial Data',
        Description:
          'Evaluating investments, budgets, or other financial data.',
      },
      {
        Scenario: 'Researching Scientific Data Sets',
        Description: 'Performing calculations and analysis on research data.',
      },
      {
        Scenario: 'Marketing and Sales Data Analysis',
        Description:
          'Calculating statistics related to marketing or sales data.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/PYTHON_Projects/main/calculator.py',
  },
  {
    projectName: 'Demographic-Data-Analyzer',
    projectOverview:
      'The Demographic Data Analyzer project delves into the intricate landscape of demographics, offering a comprehensive overview of diverse population segments. By meticulously exploring demographics, the project aims to unveil the richness and complexity inherent in various demographic categories. The focus extends beyond mere demographic representations, diving into the realm of statistical insights to uncover patterns and trends within the data. Through this analytical journey, the Demographic Data Analyzer unravels intricate data patterns, providing valuable insights that contribute to a nuanced understanding of diverse populations and informing strategic decision-making processes.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Cleaning and Preparation',
        Description:
          "Ensured data integrity by checking for missing values and typos. Replaced missing values in 'work class', 'occupation', and 'Native country' columns with appropriate categories.",
      },
      {
        Responsibility: 'Data Exploration and Analysis',
        Description:
          'Conducted descriptive statistical analysis to comprehend the distribution of the dataset and answered various demographic questions.',
      },
      {
        Responsibility: 'Statistical Calculations',
        Description:
          'Utilized statistical methods to extract meaningful insights from the dataset.',
      },
      {
        Responsibility: 'Data Manipulation with pandas',
        Description:
          'Employed pandas for efficient data manipulation and preparation.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Data Hygiene and Cleaning',
        Description:
          'Demonstrates expertise in maintaining data integrity and cleanliness.',
      },
      {
        Ability: 'Data Cleaning Techniques',
        Description:
          'Highlights proficiency in handling missing values and ensuring data quality.',
      },
      {
        Ability: 'Pandas Expertise',
        Description:
          'Showcases skills in efficiently manipulating and preparing data with pandas.',
      },
      {
        Ability: 'Data Sculpting with pandas',
        Description:
          'Emphasizes the ability to transform and shape data effectively using pandas.',
      },
      {
        Ability: 'Statistical Prowess',
        Description:
          'Demonstrates competence in applying statistical methods for valuable insights.',
      },
      {
        Ability: 'Crafting Insights Through Numbers',
        Description:
          'Highlights the ability to extract meaningful interpretations from statistical analysis.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Turning Data into Narratives',
        Description:
          "Using the project's insights to create compelling stories and communicate findings effectively.",
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/PYTHON_Projects/main/Demographic_Data_Analyzer.py',
  },
  {
    projectName: 'Medical Data Visualizer',
    projectOverview:
      'In this comprehensive analysis, I undertook an examination of a medical dataset, delving into patient demographics, health indicators, and lifestyle habits. My multifaceted skill set in data analysis, content creation, and accounting was prominently displayed throughout the project.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Analyst',
        Description:
          "Employed advanced data cleansing techniques, encompassing outlier detection and removal, normalization, and the application of feature engineering such as BMI calculation to enhance the dataset's integrity.",
      },
      {
        Responsibility: 'Content Creator',
        Description:
          'Produced insightful visualizations employing Seaborn, effectively conveying complex information related to data distribution, comparison, and correlation analysis. The visualizations were instrumental in unraveling the intricacies of the dataset.',
      },
      {
        Responsibility: 'Accountant',
        Description:
          'Leveraged analytical acumen to discern and present insights regarding health trends and potential relationships embedded within the dataset, adding a valuable financial perspective to the project.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Explore Distributions',
        Description:
          'Thoroughly examined key variables, including age, height, weight, and blood pressure, unveiling nuanced distributions that contribute to a comprehensive understanding of the dataset.',
      },
      {
        Ability: 'Compare Categories',
        Description:
          'Conducted in-depth comparisons of values across distinct categories, with a specific focus on the presence of heart disease. This meticulous analysis illuminated patterns and distinctions within the data.',
      },
      {
        Ability: 'Correlation Matrix Analysis',
        Description:
          'Utilized a correlation matrix to discern potential relationships between variables, adding a layer of sophistication to the analysis by uncovering hidden connections and interdependencies.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Real-World Medical Data Handling',
        Description:
          'This project stands as a testament to my adeptness in handling and analyzing real-world medical data, demonstrating adaptability and proficiency in extracting actionable insights.',
      },
      {
        Scenario: 'Data Visualization Mastery',
        Description:
          'I highlighted a high level of proficiency in data visualization, presenting intricate information with clarity and precision. The visualizations not only communicated complex data effectively but also added aesthetic value.',
      },
      {
        Scenario: 'Analytical Insight Extraction',
        Description:
          'I highlighted analytical prowess in identifying intricate relationships and extracting valuable insights from the dataset. This capability adds depth to the analysis, setting a high standard in the realm of data interpretation.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/PYTHON_Projects/main/Medical Data Visualizer.py',
    Picture: [medical1, medical2],
  },
  {
    projectName: 'Page View Time Series Visualizer',
    projectOverview:
      'I dive into the depths of a historical dataset covering daily page views for the freeCodeCamp forum spanning May 2016 to December 2019. Witness my meticulous data-cleaning techniques, employing Interquartile Range (IQR) to identify and eliminate outliers, ensuring an accurate depiction of typical page view trends.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Analyst Excellence',
        Description:
          'Employed advanced data cleaning techniques, wielding the power of Interquartile Range (IQR) to identify and eliminate outliers, thereby enhancing the accuracy of the dataset. Delving into the nuances of the page view data, revealing patterns and seasonality through astute analytical skills.',
      },
      {
        Responsibility: 'Content Creation Expertise',
        Description:
          'Crafted visually stunning data representations using Seaborn and Matplotlib libraries, transforming raw data into compelling visualizations. Created three insightful visuals: line plot, bar chart, and box plots to showcase trends, seasonality, and distribution of page views.',
      },
      {
        Responsibility: 'Accounting Finesse',
        Description:
          "Applied analytical prowess to identify intricate patterns and seasonality within the realm of page view data, bringing an accountant's precision to the analysis.",
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Time-Series Data Analysis',
        Description:
          'The project demonstrates my capability to handle and analyze time-series data with finesse, using IQR for outlier detection and revealing patterns and seasonality.',
      },
      {
        Ability: 'Data Visualization Expertise',
        Description:
          'The project exhibits my talent in crafting clear and informative visualizations tailored for diverse purposes, using line plots, bar charts, and box plots.',
      },
      {
        Ability: 'Pattern Recognition and Insight Extraction',
        Description:
          'The project highlights my analytical acumen by seamlessly identifying patterns and drawing meaningful insights from complex datasets.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Investigating Seasonal Variations',
        Description:
          'Using the visualizations to understand factors influencing seasonal variations in page views.',
      },
      {
        Scenario: 'Predicting Future Trends',
        Description:
          'Implementing advanced statistical models to predict future page view trends based on identified patterns.',
      },
      {
        Scenario: 'Communicating Findings',
        Description:
          'Effectively communicating findings through engaging data stories or reports using the created visualizations.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/PYTHON_Projects/main/Page View Time Series Visualizer.py',
    Picture: [page1, page2, page3],
  },
  {
    projectName: 'Sea Level Predictor',
    projectOverview:
      'I unearth insights from historical sea level data provided by the EPA, with a specific focus on CSIRO Adjusted Sea Levels.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Exploration and Cleaning',
        Description:
          'Utilized data cleaning and exploration techniques like head(), info(), and describe() to gain initial understanding of the sea level data.',
      },
      {
        Responsibility: 'Data Visualization with Seaborn',
        Description:
          'Crafted captivating visualizations using Seaborn to illustrate trends and predictions in sea level rise.',
      },
      {
        Responsibility: 'Sea Level Prediction using Linear Regression',
        Description:
          'Leveraged linear regression to calculate the slope and intercept for two scenarios, predicting sea level rise in 2050 based on long-term and recent trends.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Data Exploration and Analysis',
        Description:
          'Successfully cleaned and explored the sea level data, demonstrating understanding of data handling techniques.',
      },
      {
        Ability: 'Data Visualization',
        Description:
          'Created impactful visualizations with Seaborn to effectively communicate trends and predictions about sea level rise.',
      },
      {
        Ability: 'Linear Regression and Trend Analysis',
        Description:
          'Applied linear regression to predict sea level rise in 2050 based on both long-term and recent trends, showcasing proficiency in analyzing environmental data and making data-driven predictions.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Handling Diverse Data Sets',
        Description:
          "The project's skills can be applied to analyze and extract insights from various data sets.",
      },
      {
        Scenario: 'Data Visualization for Communication',
        Description:
          'Seaborn visualizations created in this project can be adapted to explain data insights and predictions to different audiences clearly and effectively.',
      },
      {
        Scenario: 'Linear Regression for Modeling and Prediction',
        Description:
          'The knowledge gained from this project can be used to apply linear regression for modeling and predicting trends in other contexts.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/PYTHON_Projects/main/Sea Level Predictor.py',
    Picture: [sea1, sea2, sea3],
  },
  {
    projectName: 'Small Business Database',
    projectOverview:
      'I embark on an immersive journey through the intricacies of the Chikel Store SQL Project, where my multifaceted expertise as a Data Analyst, Content Creator, and Accountant converges to create a dynamic and comprehensive database management solution.',
    'Key Responsibilities': [
      {
        Responsibility: 'Database Schema Design',
        Description:
          'Crafted a robust relational database schema for Chikel Store, meticulously outlining the relationships between customers, orders, products, and employees.',
      },
      {
        Responsibility: 'Database Documentation',
        Description:
          'Created comprehensive documentation for the database, clearly explaining the structure and relationships between tables and columns.',
      },
      {
        Responsibility: 'Financial Analysis of Order Data',
        Description:
          'Analyzed order data to identify spending patterns and customer purchasing behavior, providing valuable insights for financial analysis.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Database Schema Design',
        Description:
          'Defined and structured tables with relationships between Customers, Orders, Product Category, Product, Order Items, and Employees.',
      },
      {
        Ability: 'Data Population',
        Description:
          'Populated the database with sample data to demonstrate its functionality.',
      },
      {
        Ability: 'Data Integrity Management',
        Description:
          'Implemented foreign key constraints to ensure data integrity and coherence within the database.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Relational Database Management',
        Description:
          'This project showcases my expertise in designing, documenting, and managing relational databases.',
      },
      {
        Scenario: 'Data Modeling',
        Description:
          'The project highlights my ability to create effective data models for real-world business scenarios.',
      },
      {
        Scenario: 'Financial Data Analysis',
        Description:
          'I can leverage my skills to analyze financial data and extract valuable insights from databases.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/SQL-Projects/main/Small Business Database.sql',
  },
  {
    projectName: 'Small Business Query',
    projectOverview:
      'I embark on an SQL Exploration Odyssey by engaging SQL queries to navigate through the intricate web of tables within the Chikel Store database. I conducted a comprehensive data extraction from all tables, focusing on specific columns like customer names, product details, and order specifics.',
    'Key Responsibilities': [
      {
        Responsibility: 'SQL Query Formulation and Execution',
        Description:
          'Formulated and executed SQL queries with precision, extracting valuable insights from the Chikel Store database.',
      },
      {
        Responsibility: 'Clear and Organized Query Presentation',
        Description:
          'Articulated queries in a lucid and organized manner, promoting easy understanding of the data retrieval logic.',
      },
      {
        Responsibility: 'Financial Analysis through Queries',
        Description:
          'Leveraged queries to analyze customer interactions, product details, and sales trends, applying financial acumen for insightful interpretations.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'SQL Proficiency for Data Access and Manipulation',
        Description:
          'Effectively utilized SQL for data access and manipulation, laying the groundwork for insightful analyses.',
      },
      {
        Ability: 'Strategic Query Structuring',
        Description:
          'Demonstrated the ability to structure queries strategically, unlocking key business insights about customers, products, and orders.',
      },
      {
        Ability: 'Financial Analysis using SQL Queries',
        Description:
          'Utilized queries to decipher customer purchasing patterns and navigate sales trends, highlighting financial prowess.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Real-World Application of SQL Queries',
        Description:
          'This project showcases my ability to apply SQL queries in real-world scenarios for data retrieval and analysis.',
      },
      {
        Scenario: 'Mastering Complex Queries and Joins',
        Description:
          'Highlights my skills in crafting intricate queries and joins to perform comprehensive analysis across multiple tables.',
      },
      {
        Scenario: 'Database Performance Analysis',
        Description:
          'Demonstrates the ability to analyze database performance over specific periods using targeted queries and timeframe filtering, providing valuable insights.',
      },
    ],
    Link: 'https://raw.githubusercontent.com/ACSP-Tech/SQL-Projects/main/Small Business Query.sql',
  },
  {
    projectName: 'Absenteeism Report',
    projectOverview:
      'In the Absence Analytics Power BI Project, I wear the hats of Data Expert, Creative Analyst, and Financial Strategist to delve into the world of employee absenteeism, offering a comprehensive exploration of workforce insights.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Exploration and Processing',
        Description:
          'Processed and analyzed employee absenteeism data, meticulously cleaning and transforming it to identify trends and patterns.',
      },
      {
        Responsibility: 'Power BI Report Creation',
        Description:
          'Crafted visually captivating Power BI reports to effectively communicate insights derived from the analyzed data.',
      },
      {
        Responsibility: 'Financial Impact Assessment',
        Description:
          'Evaluated the financial impact of absenteeism by calculating the costs to the company, providing valuable context to the analysis.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Data Cleaning and Analysis',
        Description:
          'Meticulously cleaned and prepared absenteeism data for accurate and consistent analysis, uncovering trends like departments with high rates, reasons for absence, and peak absence times.',
      },
      {
        Ability: 'Data Visualization with Power BI',
        Description:
          'Designed and presented clear and concise Power BI visuals using charts, graphs, and tables to effectively communicate findings to diverse audiences.',
      },
      {
        Ability: 'Financial Cost Analysis',
        Description:
          'Calculated the cost of absenteeism considering factors like salary and benefits, adding a tangible financial perspective to the analysis.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Power BI Data Processing and Analysis',
        Description:
          'Utilize Power BI to process and analyze complex data sets for insightful decision-making.',
      },
      {
        Scenario: 'Data Visualization for Communication',
        Description:
          'Create visually appealing and comprehensible data insights for diverse audiences across different contexts.',
      },
      {
        Scenario: 'Cost Quantification and Analysis',
        Description:
          'Evaluate and quantify the cost of various factors, adding tangible value to any analysis and enhancing financial understanding.',
      },
    ],
    Picture: [absenteeism],
    Link: 'Power-BI/Absenteeism Report.pbix at main · ACSP-Tech/Power-BI (github.com)',
  },
  {
    projectName: 'Data Professional Survey Report',
    projectOverview:
      'I undertook the roles of Data Analyst, Content Creator, and Accountant to extract meaningful insights from a survey of data professionals.',
    'Key Responsibilities': [
      {
        Responsibility: 'Survey Data Analysis',
        Description:
          'Meticulously cleaned and prepared survey data for accurate analysis. Utilized visualizations to uncover key trends and insights like popular programming languages and job satisfaction across roles.',
      },
      {
        Responsibility: 'Power BI Report Creation',
        Description:
          'Crafted an informative and visually appealing Power BI report to communicate survey findings clearly through charts, graphs, and tables.',
      },
      {
        Responsibility: 'Salary Data Analysis',
        Description:
          'Analyzed salary data and compensation trends within the data professional field, adding financial context to the survey findings.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Data Visualization',
        Description:
          'Effectively conveyed complex insights through compelling visuals, demonstrating strong data visualization skills and enhancing clarity and impact of findings.',
      },
      {
        Ability: 'Multifaceted Expertise',
        Description:
          'Transitioned seamlessly between Data Analyst, Content Creator, and Accountant roles, showcasing versatility and combining analytical prowess with creative flair.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Uncovering Correlations in Survey Data',
        Description:
          'Identifying underlying trends through analysis of correlations between different survey responses for deeper understanding.',
      },
      {
        Scenario: 'Data-Driven Recommendations',
        Description:
          'Leveraging insights from the survey to provide data-driven recommendations for various stakeholders.',
      },
      {
        Scenario: 'Tailored Content for Data Audiences',
        Description:
          'Creating content and presentations specifically tailored to different audiences within the data field.',
      },
    ],
    Picture: [data],
    Link: 'Power-BI/Survey Analysis.pbix at main · ACSP-Tech/Power-BI (github.com)',
  },
  {
    projectName: 'Superstore Profit Report',
    projectOverview:
      "This Power BI project explores Superstore's profit data to uncover valuable insights for strategic decision-making.",
    'Key Responsibilities': [
      {
        Responsibility: 'Data Analysis',
        Description:
          'Cleaned and prepared sales data, ensuring accuracy and consistency. Analyzed trends in profitability across business units, departments, and product categories.',
      },
      {
        Responsibility: 'Visualization',
        Description:
          'Created an engaging Power BI report with charts, graphs, and tables to present findings visually and comprehensively.',
      },
      {
        Responsibility: 'Financial Analysis',
        Description:
          'Interpreted and presented financial data, including profit margins and total sales. Calculated key financial metrics for a complete understanding of performance.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Identifying Profit Dynamics',
        Description:
          'Unveiled variations in profitability across units, departments, and categories. Pinpointed high- and low-margin areas.',
      },
      {
        Ability: 'Analyzing Temporal Trends',
        Description:
          'Investigated profit trends over different time periods, offering dynamic insights presented through clear visuals.',
      },
      {
        Ability: 'Communicating Impactful Insights',
        Description:
          'Demonstrated skill in gathering, analyzing, and interpreting profit data using Power BI. Effectively communicated complex financial insights through visualizations.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Deeper Analysis of Profitability Trends',
        Description:
          'Uncover underlying reasons for identified trends to gain further insights.',
      },
      {
        Scenario: 'Data-Driven Profitability Recommendations',
        Description:
          'Develop recommendations for specific departments to enhance profitability.',
      },
      {
        Scenario: 'Interactive Dashboards and Reports',
        Description:
          'Create interactive dashboards and reports for further exploration and analysis of profit data.',
      },
    ],
    Picture: [stores],
    Link: 'Power-BI/PROJECT_BI.pbix at main · ACSP-Tech/Power-BI (github.com)',
  },
  {
    projectName: 'Bike Sales Dashboard',
    projectOverview:
      'This Excel dashboard analyzes and visualizes bike sales data, providing insights for strategic decision-making. Data is carefully cleaned and organized for accuracy and consistency.',
    'Key Responsibilities': [
      {
        Responsibility: 'Data Analysis',
        Description:
          'Collected, cleaned, and organized bike sales data, ensuring accuracy and extracted meaningful insights through analysis.',
      },
      {
        Responsibility: 'Data Visualization',
        Description:
          'Created diverse charts and graphs (sales trends, product categories, regional sales, customer demographics) using line, bar, pie, and heatmap charts effectively.',
      },
      {
        Responsibility: 'Content Creation',
        Description:
          'Designed a visually appealing and user-friendly Excel dashboard for clear communication of sales insights, strategically using formatting, colors, and labeling for readability and interactivity.',
      },
      {
        Responsibility: 'Financial Analysis',
        Description:
          'Analyzed sales data for trends, calculated key metrics (total sales, average sales, profit margins), and visually presented financial performance within the dashboard.',
      },
    ],
    'Demonstrated Abilities': [
      {
        Ability: 'Sales Data Analysis',
        Description:
          'Extracted and analyzed sales data effectively to gain valuable insights.',
      },
      {
        Ability: 'Data Visualization',
        Description:
          'Strong skills in creating informative and engaging charts and graphs for clear communication.',
      },
      {
        Ability: 'Financial Expertise',
        Description:
          'Demonstrated financial acumen in calculating and presenting key sales metrics.',
      },
    ],
    'Application Scenarios': [
      {
        Scenario: 'Sales Strategy and Planning',
        Description:
          'Utilize insights to develop and refine sales strategies and plans.',
      },
      {
        Scenario: 'Regional Performance Analysis',
        Description:
          'Identify top-selling locations and tailor marketing or promotions based on regional preferences.',
      },
      {
        Scenario: 'Customer Segmentation and Targeting',
        Description:
          'Segment customers based on purchase data and create targeted marketing campaigns.',
      },
    ],
    Picture: [bike],
    Link: 'MY-EXCEL/BIKE SALES DASHBOARD.xlsx at main · ACSP-Tech/MY-EXCEL (github.com)',
  },
];
