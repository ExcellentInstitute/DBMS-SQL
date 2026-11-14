// dbms-data.js
// Excellent Institute - Database Management System (DBMS) & SQL Masterclass (Detailed Student Edition)
// BATCH 1: Chapters 1 to 4

const dbmsBookData = [
    // =========================================================================
    // CHAPTER 1: BASICS OF DBMS
    // =========================================================================
    {
        id: "chapter1",
        title: "Chapter 1: Basics of DBMS (Database Management System)",
        topics: [
            {
                heading: "Data vs. Information (The Raw Ingredients vs. The Cooked Meal)",
                text: "Before we understand a Database, we must understand the most basic word in computer science: <strong>Data</strong>. Many people think 'Data' and 'Information' mean the same thing, but they are completely different!<br><br>" +
                      "<ul>" +
                      "<li><strong>Data (Raw Facts):</strong> Data is a collection of raw numbers, words, or images that have no meaning on their own. For example, if someone hands you a piece of paper written with <em>'105, Rahul, 92, Surada'</em>, you have no idea what those words mean. Is 105 a bus number or a house number? Is 92 Rahul's age or his marks?</li>" +
                      "<li><strong>Information (Processed Data):</strong> When we organize, label, and process that raw data so it makes complete sense, it becomes Information! For example: <em>'Roll No: 105, Student Name: Rahul, Computer Marks: 92%, City: Surada'</em>. Now it is useful and meaningful!</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 Everyday Analogy:</strong> Think of <strong>Data</strong> like raw kitchen ingredients—flour, sugar, milk, and cocoa powder sitting separately on a table. By themselves, you can't serve them at a birthday party. When a chef mixes and bakes them together into a Chocolate Cake, that finished cake is <strong>Information</strong>!</div>",
                codeSnippet: "RAW DATA (Unorganized & Confusing):\n105, Rahul, 92, Surada\n\nPROCESSED INFORMATION (Organized & Meaningful):\n+---------+--------------+-------+--------+\n| Roll_No | Student_Name | Marks | City   |\n+---------+--------------+-------+--------+\n| 105     | Rahul        | 92%   | Surada |\n+---------+--------------+-------+--------+",
                imgSrc: "images/dbms-01-data-vs-info.jpg"
            },
            {
                heading: "What is a Database and What is a DBMS?",
                text: "Now that we have useful data, where do we keep it? Every day, apps like WhatsApp, YouTube, Instagram, and SBI YONO handle crores of messages, videos, and bank balances. They cannot just leave this data floating around in the computer!<br><br>" +
                      "<ul>" +
                      "<li><strong>Database (The Digital Locker Room):</strong> A Database is an organized collection of related data stored electronically inside a computer or server so that it can be easily found, updated, and managed. Think of a school's Student Database—it holds student names, attendance, fees, and exam marks all in one organized place.</li>" +
                      "<li><strong>DBMS - Database Management System (The Smart Manager):</strong> A Database is just the storage container. You cannot talk to a storage container directly! You need a smart software program that sits between <em>You (the User)</em> and the <em>Database</em>. That software is called a <strong>DBMS</strong>. Popular examples of DBMS software include <strong>MySQL, Oracle, PostgreSQL, Microsoft SQL Server, and MongoDB</strong>.</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 Everyday Analogy:</strong> Imagine a giant <strong>School Library</strong> with 50,000 books. The room full of bookshelves is the <strong>Database</strong>. The <strong>Librarian</strong> sitting at the front desk is the <strong>DBMS</strong>! When you want a book, you don't run around checking 50,000 shelves yourself—you ask the Librarian, and the Librarian quickly fetches the exact book for you while keeping the library safe.</div>",
                codeSnippet: "[ You / Mobile App ]  --->  [ DBMS Software ]  --->  [ Database Storage ]\n   (Asks for data)           (MySQL / Oracle)         (Hard Drive Disk)\n                             Checks security &\n                             fetches exact record!",
                imgSrc: "images/dbms-02-what-is-dbms.jpg"
            },
            {
                heading: "Why Not Just Use Paper Registers or MS Excel? (File System vs. DBMS)",
                text: "Students often ask: <em>'Sir, why do we need heavy DBMS software when we can just save data in MS Excel spreadsheets or Notepad files?'</em> In the early days of computers, companies did use simple files (called a <strong>Traditional File Processing System</strong>). However, as soon as the data grew large, 5 huge problems appeared:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Data Redundancy (Duplicate Data Waste):</strong> Suppose a student named Priya joins a computer institute. Her Name, Phone Number, and Address are typed in the <em>Admission Excel file</em>, typed again in the <em>Fee Receipt Excel file</em>, and typed a third time in the <em>Exam Result Excel file</em>. Storing the exact same data in multiple places wastes storage space. This duplication is called <strong>Data Redundancy</strong>.</li>" +
                      "<li><strong>2. Data Inconsistency (Mismatched Information):</strong> What happens if Priya changes her phone number? If the office clerk updates her phone number in the Admission file, but forgets to update it in the Fee file and Exam file, the computer now has two different phone numbers for the same student! Nobody knows which one is true. This mismatch is called <strong>Data Inconsistency</strong>.</li>" +
                      "<li><strong>3. Difficulty in Accessing Data:</strong> Finding 'All students from Ganjam district who scored above 85% and have paid full fees' across 20 separate Excel sheets takes hours of manual filtering. A DBMS can answer this in 0.001 seconds!</li>" +
                      "<li><strong>4. Poor Security & Privacy:</strong> In an Excel sheet, anyone who has the password can see <em>everything</em>—including the staff's private salaries! A DBMS lets you create strict role-based security: a student can only see their own marks, a teacher can edit marks, and only the Principal can see fee accounts.</li>" +
                      "<li><strong>5. Concurrent Access Crashes (Multiple Users at Once):</strong> If 500 people try to open and edit the same Excel file at the exact same second, it will freeze or overwrite someone's work. A DBMS allows millions of users (like people booking train tickets on IRCTC at 10:00 AM) to use the database simultaneously without crashing!</li>" +
                      "</ul>",
                codeSnippet: "FILE SYSTEM (Old Way - Excel/Text Files):\nAdmission.xlsx (Priya: 9876500001)  <-- Updated!\nFees.xlsx      (Priya: 8888811111)  <-- Forgot to update! (INCONSISTENCY)\n\nDBMS (Smart Way - Single Central Truth):\nCentral Student Record (Priya: 9876500001)\n ├── Linked to Admission\n ├── Linked to Fees\n └── Linked to Exams (Update once, reflects everywhere!)",
                imgSrc: "images/dbms-03-file-vs-dbms.jpg"
            },
            {
                heading: "The 4 Core Jobs of Any Database: CRUD Operations",
                text: "No matter how big or complex an app is—whether it is Facebook, Amazon, or your college portal—every database in the world fundamentally performs just <strong>4 basic actions</strong>. Programmers use the famous shortcut word <strong>CRUD</strong> to remember them:<br><br>" +
                      "<ul>" +
                      "<li><strong>C — Create (Adding New Data):</strong> When you sign up for a new Instagram account or admit a new student into the institute, the DBMS <em>Creates</em> a brand-new record in the database.</li>" +
                      "<li><strong>R — Read (Searching & Viewing Data):</strong> When you open WhatsApp to read messages, or search for 'Shoes under ₹1000' on Flipkart, the DBMS <em>Reads</em> and fetches the matching data for you.</li>" +
                      "<li><strong>U — Update (Modifying Existing Data):</strong> When you change your profile picture, edit a typo in your name, or when a bank adds ₹500 to your existing account balance, the DBMS <em>Updates</em> the existing record.</li>" +
                      "<li><strong>D — Delete (Removing Data Forever):</strong> When you delete an old post or remove a cancelled order, the DBMS <em>Deletes</em> that record from the storage.</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 2:</strong> Now you know what a DBMS is and how it performs CRUD operations! But did you know that not all databases store data the same way? Some store data in neat, strict tables (like a ruled school register), while others store data in flexible digital folders (like a scrapbook). In Chapter 2, let's explore the two giant families of databases: <strong>RDBMS vs. NoSQL</strong>!</div>",
                codeSnippet: "THE 'CRUD' LIFE CYCLE IN EVERY APP:\nC -> CREATE : Register a new student account   (SQL: INSERT)\nR -> READ   : View student's exam scorecard    (SQL: SELECT)\nU -> UPDATE : Change student's mobile number   (SQL: UPDATE)\nD -> DELETE : Remove an old/cancelled record   (SQL: DELETE)",
                imgSrc: "images/dbms-04-crud.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 2: DIFFERENCE BETWEEN RDBMS AND NOSQL
    // =========================================================================
    {
        id: "chapter2",
        title: "Chapter 2: Difference between RDBMS and NoSQL",
        topics: [
            {
                heading: "What is RDBMS? (The Strict Table System)",
                text: "In 1970, a brilliant computer scientist at IBM named <strong>Dr. E.F. Codd</strong> invented a revolutionary way to organize databases. He said all data should be stored in neat <strong>Tables</strong> made of <strong>Rows and Columns</strong>, and these tables should be connected (related) to each other. This is called a <strong>Relational Database Management System (RDBMS)</strong>.<br><br>" +
                      "In an RDBMS, every table looks just like a neat register:<br>" +
                      "<ul>" +
                      "<li><strong>Columns (Fields / Attributes):</strong> Vertical categories that define <em>what kind</em> of data goes inside, such as <code>Roll_No</code>, <code>Name</code>, <code>Course</code>, and <code>Fee_Paid</code>. Every student MUST follow these exact columns.</li>" +
                      "<li><strong>Rows (Records / Tuples):</strong> Each horizontal line represents one complete item—for example, all details of Roll No 101 (Ankit).</li>" +
                      "<li><strong>Relations (Links):</strong> Instead of putting everything into one giant messy table, RDBMS splits data into separate clean tables (like a <code>Students</code> table and a <code>Courses</code> table) and connects them using a common ID number!</li>" +
                      "<li><strong>Popular RDBMS Software:</strong> MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, and SQLite (used inside Android phones!).</li>" +
                      "</ul>",
                codeSnippet: "RDBMS STORES DATA IN STRICT, CONNECTED TABLES:\n\nTable 1: STUDENTS                      Table 2: COURSES\n+---------+--------+-----------+       +-----------+-------------+\n| Roll_No | Name   | Course_ID | ----> | Course_ID | Course_Name |\n+---------+--------+-----------+       +-----------+-------------+\n| 101     | Ankit  | C01       |       | C01       | PGDCA       |\n| 102     | Meera  | C02       |       | C02       | DCA & Tally |\n+---------+--------+-----------+       +-----------+-------------+",
                imgSrc: "images/dbms-05-rdbms.jpg"
            },
            {
                heading: "What is NoSQL? (The Flexible Modern System)",
                text: "For almost 40 years, RDBMS ruled the world. Then came the era of smartphones, YouTube, Instagram, and WhatsApp! Suddenly, millions of people were uploading photos, voice notes, live locations, comments, and emojis every second. This kind of data is messy and unpredictable—one Instagram post might have 1 photo and 0 comments, while another has 10 videos, 50 hashtags, a map location, and 10,000 comments!<br><br>" +
                      "Trying to force this unpredictable data into a rigid RDBMS table with fixed columns was a nightmare. So engineers created <strong>NoSQL (Not Only SQL)</strong> databases!<br><br>" +
                      "<strong>How NoSQL Works (4 Flexible Styles):</strong><br>" +
                      "<ul>" +
                      "<li><strong>1. Document Databases (Most Popular - e.g., MongoDB, Firebase):</strong> Instead of rows and columns, it stores data like digital JSON report cards (called Documents). Student A's document can have <code>Name</code> and <code>Phone</code>, while Student B's document can have <code>Name</code>, <code>Hobbies</code>, <code>Instagram_Link</code>, and <code>Blood_Group</code>—no fixed column rules!</li>" +
                      "<li><strong>2. Key-Value Stores (e.g., Redis):</strong> Works like a simple dictionary or coat check—one unique Key points to one Value (super fast for storing shopping carts or login sessions).</li>" +
                      "<li><strong>3. Wide-Column Stores (e.g., Cassandra):</strong> Handles petabytes of data across thousands of servers (used by Netflix to remember where you paused a movie).</li>" +
                      "<li><strong>4. Graph Databases (e.g., Neo4j):</strong> Stores data as connected circles (Nodes), perfect for mapping 'Friends of Friends' on social networks or Google Maps routes.</li>" +
                      "</ul>",
                codeSnippet: "NoSQL (MongoDB Document Style) - Every record can have different fields!\n\nDocument 1: {\n  \"roll_no\": 101,\n  \"name\": \"Ankit\",\n  \"skills\": [\"C\", \"SQL\", \"Kotlin\"]\n}\n\nDocument 2: {\n  \"roll_no\": 102,\n  \"name\": \"Meera\",\n  \"laptop_brand\": \"Lenovo ThinkPad\",  // Document 1 didn't have this, and that's OK!\n  \"hostel_resident\": false\n}",
                imgSrc: "images/dbms-06-nosql.jpg"
            },
            {
                heading: "How Databases Grow: Vertical vs. Horizontal Scaling & ACID Rules",
                text: "Why do Banks love RDBMS while Social Media apps love NoSQL? It comes down to two things: <strong>How they grow (Scaling)</strong> and <strong>How strict they are with accuracy (ACID Rules)</strong>.<br><br>" +
                      "<strong>1. Vertical Scaling (RDBMS) vs. Horizontal Scaling (NoSQL):</strong><br>" +
                      "<ul>" +
                      "<li><strong>Vertical Scaling (Scale-Up - Used by RDBMS):</strong> Imagine your database server is getting full. In RDBMS, you upgrade that <em>one single computer</em> by adding more RAM (e.g., from 16GB to 128GB) and a bigger CPU. It is like building a taller skyscraper.</li>" +
                      "<li><strong>Horizontal Scaling (Scale-Out - Used by NoSQL):</strong> Instead of buying one super-expensive giant computer, NoSQL lets you connect 1,000 cheap, normal computers together to share the load! It is like building more houses across a village.</li>" +
                      "</ul>" +
                      "<strong>2. The Famous ACID Properties (Why Banks Trust RDBMS):</strong><br>" +
                      "Suppose you send ₹500 to your friend via UPI. Your bank uses RDBMS because it follows strict <strong>ACID</strong> rules:<br>" +
                      "<ul>" +
                      "<li><strong>A - Atomicity (All or Nothing):</strong> Either the ₹500 leaves your account AND reaches your friend's account completely, OR if the internet fails halfway, the whole transaction is cancelled and your money stays safe. Never half-done!</li>" +
                      "<li><strong>C - Consistency:</strong> Total money before and after the transfer must follow all bank rules (you can't send ₹500 if your balance is ₹100).</li>" +
                      "<li><strong>I - Isolation:</strong> If two people send money at the exact same second, their transactions won't mix up.</li>" +
                      "<li><strong>D - Durability:</strong> Once the screen says 'Payment Successful', even if the bank's power goes out 1 millisecond later, the record is permanently saved on disk.</li>" +
                      "</ul>",
                codeSnippet: "SCALING COMPARISON:\nVertical (RDBMS)   : [Small Server]  ==Upgrade RAM/CPU==>  [GIANT SUPER SERVER]\nHorizontal (NoSQL) : [Server 1] + [Server 2] + [Server 3] + [Server 4] (Share load!)\n\nACID RULE IN BANKING (Atomicity):\nStep 1: Deduct ₹500 from Rahul   ✅\nStep 2: Power failure!           ❌\nResult: DBMS automatically refunds ₹500 to Rahul (All or Nothing!)",
                imgSrc: "images/dbms-07-scaling-acid.jpg"
            },
            {
                heading: "Side-by-Side Comparison: RDBMS vs. NoSQL",
                text: "Let's summarize the exact differences between RDBMS and NoSQL so you can answer any exam or interview question effortlessly:<br><br>" +
                      "<ul>" +
                      "<li><strong>Data Storage Format:</strong> RDBMS stores data in structured <strong>Tables (Rows & Columns)</strong>. NoSQL stores data in <strong>Documents (JSON), Key-Value pairs, or Graphs</strong>.</li>" +
                      "<li><strong>Structure (Schema):</strong> RDBMS has a <strong>Fixed Schema</strong> (you must define all columns before adding data). NoSQL has a <strong>Dynamic/Flexible Schema</strong> (you can add new fields anytime).</li>" +
                      "<li><strong>Relationships:</strong> RDBMS is amazing at handling complex relationships between multiple tables using <strong>JOINs</strong>. NoSQL prefers keeping related data together inside a single document instead of joining tables.</li>" +
                      "<li><strong>Best Use Case:</strong> Use <strong>RDBMS</strong> for Banking, Accounting (Tally), School Management, E-Commerce Orders, and Hospital Records where 100% accuracy is mandatory. Use <strong>NoSQL</strong> for Real-Time Chat Apps, Social Media Feeds, IoT Sensor Logs, and Game Leaderboards where speed and flexibility matter most.</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 3:</strong> In this course, we are mastering <strong>RDBMS and SQL</strong>—the foundation of almost every software system! We just mentioned two important database words: <em>'Data Models'</em> and <em>'Schema'</em>. What do those words actually mean? How did computers evolve into the Relational Table model, and how does a database organize its layers? Let's find out in Chapter 3!</div>",
                codeSnippet: "+--------------------+--------------------------------+--------------------------------+\n| Feature            | RDBMS (SQL)                    | NoSQL                          |\n+--------------------+--------------------------------+--------------------------------+\n| Storage Style      | Tables (Rows & Columns)        | JSON Documents, Key-Value      |\n| Rules (Schema)     | Strict & Pre-defined           | Flexible & Dynamic             |\n| Scaling            | Vertical (Bigger Server)       | Horizontal (More Servers)      |\n| Reliability Rule   | Strict ACID Compliance         | Fast & Flexible (BASE)         |\n| Top Examples       | MySQL, Oracle, PostgreSQL      | MongoDB, Firebase, Redis       |\n+--------------------+--------------------------------+--------------------------------+",
                imgSrc: "images/dbms-08-rdbms-vs-nosql.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 3: DATA MODELS AND SCHEMA
    // =========================================================================
    {
        id: "chapter3",
        title: "Chapter 3: Data Models and Database Schema",
        topics: [
            {
                heading: "What is a Data Model? (The Evolution of Database Design)",
                text: "When an architect builds a school building, they first decide on the style of structure. Similarly, a <strong>Data Model</strong> is the logical design that decides <em>how data is connected, stored, and accessed</em> inside a DBMS. Over the last 60 years, computer scientists invented 4 major Data Models:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Hierarchical Model (The Family Tree - 1960s):</strong> Data is organized like an upside-down tree. Every child record has <strong>only ONE parent</strong>, starting from a single 'Root' at the top. For example: <em>College ➔ Department ➔ Teachers ➔ Students</em>. It is simple, but what if a student takes classes in TWO different departments? The tree breaks because a child cannot have two parents!</li>" +
                      "<li><strong>2. Network Model (The Web of Links - Late 1960s):</strong> To fix the tree problem, the Network Model allowed a child record to have <strong>multiple parents</strong> (like a spiderweb). A student could now connect to both the Computer Department AND the English Library. However, as the database grew, the web of pointers became so tangled that programmers got lost trying to trace them!</li>" +
                      "<li><strong>3. Relational Model (The Table Revolution - 1970 to Present):</strong> Dr. E.F. Codd threw away complicated tree pointers and placed everything into simple, flat <strong>2D Tables (Relations)</strong>. Any table can link to any other table using matching ID numbers (Keys). It is clean, mathematical, and easy for humans to understand—making it the #1 most used model in the world today!</li>" +
                      "<li><strong>4. Object-Oriented / ER Model:</strong> Treats real-world things (like a Student or a Car) as 'Objects' or 'Entities' with properties, making it super easy to plan databases visually before coding.</li>" +
                      "</ul>",
                codeSnippet: "1. HIERARCHICAL (1 Parent Only)     2. NETWORK (Multiple Parents)     3. RELATIONAL (Clean Tables)\n         [College]                            [Student]                   +----+-------+------+\n          /     \\                             /       \\                   | ID | Name  | Dept |\n    [BCA Dept] [BSc Dept]             [BCA Dept]     [Library]            +----+-------+------+\n        |                                                                 | 1  | Rohan | BCA  |\n    [Student]                                                             +----+-------+------+",
                imgSrc: "images/dbms-09-data-models.jpg"
            },
            {
                heading: "Database Schema vs. Database Instance (The Skeleton vs. The Snapshot)",
                text: "Two words that appear in almost every DBMS exam are <strong>Schema</strong> and <strong>Instance</strong>. Let's make them crystal clear so you never confuse them:<br><br>" +
                      "<ul>" +
                      "<li><strong>Database Schema (The Permanent Blueprint / Skeleton):</strong> The Schema is the overall structure or design of the database—such as the table names, column names, data types (like Number or Text), and rules. You create the Schema <em>before</em> entering any student data, and it rarely changes! For example, designing a blank register with columns <code>Roll_No (Integer)</code>, <code>Name (Text)</code>, and <code>Fee_Balance (Decimal)</code> is the <strong>Schema</strong>.</li>" +
                      "<li><strong>Database Instance (The Current Data Snapshot):</strong> The Instance is the <strong>actual data stored inside the tables at a specific moment in time</strong>. Because students join, pay fees, or graduate every day, the Instance changes every single minute!</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 Everyday Analogy:</strong> Think of a <strong>Classroom</strong>. The walls, blackboard, benches, and seating layout are the <strong>Schema</strong> (they stay fixed all year). The actual students sitting on those benches at 10:30 AM today are the <strong>Instance</strong> (next period, a different batch of students will sit there!).</div>",
                codeSnippet: "DATABASE SCHEMA (Fixed Design - Rarely Changes):\nCREATE TABLE Students ( Roll_No INT, Name VARCHAR(50), Marks INT );\n\nDATABASE INSTANCE (Data inside at 10:00 AM today - Changes Frequently!):\nRow 1: (101, 'Subham', 88)\nRow 2: (102, 'Priyanka', 94)\nRow 3: (103, 'Kiran', 79)",
                imgSrc: "images/dbms-10-schema-vs-instance.jpg"
            },
            {
                heading: "The 3-Schema Architecture (How a Database Hides Complexity)",
                text: "When you check your bank balance on the SBI YONO app, do you need to know which hard disk sector in Mumbai is storing your balance in binary 0s and 1s? Of course not! A good DBMS hides the complicated machine details from you using the <strong>Three-Schema (Three-Level) Architecture</strong>:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Physical / Internal Level (The Bottom Layer - How Data is Stored):</strong> This is the lowest level closest to the computer's hard drive (SSD/HDD). It deals with how data is compressed, encrypted, and saved in bytes and memory blocks. Only system engineers touch this layer.</li>" +
                      "<li><strong>2. Logical / Conceptual Level (The Middle Layer - What Data is Stored):</strong> Designed by the Database Administrator (DBA), this level defines all the Tables, Columns, Data Types, and Relationships (the main Schema we learned above). It doesn't care about hard disk bytes; it cares about organizing <code>Students</code>, <code>Teachers</code>, and <code>Fees</code> tables properly.</li>" +
                      "<li><strong>3. View / External Level (The Top Layer - What Users See):</strong> This is the screen that ordinary users see! Different users get different 'Views' of the exact same database for privacy. For example, a <strong>Student View</strong> shows only their own attendance and marks; a <strong>Teacher View</strong> shows class marks but hides staff salaries; the <strong>Admin View</strong> sees everything.</li>" +
                      "</ul>",
                codeSnippet: "TOP LAYER    : [Student Screen]     [Teacher Screen]     [Accountant Screen]  <-- VIEW LEVEL\n                      \\                    |                    /\nMIDDLE LAYER :        [ Tables: Students, Marks, Fees, Salaries ]             <-- LOGICAL LEVEL\n                                           |\nBOTTOM LAYER :        [ Hard Disk Files: 010110110010.dat (SSD) ]             <-- PHYSICAL LEVEL",
                imgSrc: "images/dbms-11-three-schema.jpg"
            },
            {
                heading: "Data Independence (Why the 3 Layers Are a Superpower)",
                text: "Why did scientists divide the database into those 3 separate layers (Physical, Logical, and View)? Because it gives us a superpower called <strong>Data Independence</strong>! Data Independence means you can upgrade or change a lower layer without breaking the upper layers.<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Physical Data Independence:</strong> Suppose your institute upgrades its server from an old 500GB Hard Disk to a brand-new 2TB NVMe SSD, or changes how files are compressed at the <em>Physical Level</em>. Do you have to rewrite your SQL tables or redesign your mobile app? <strong>No!</strong> The Logical tables and User screens keep working without noticing a thing.</li>" +
                      "<li><strong>2. Logical Data Independence:</strong> Suppose the Database Administrator adds a new column called <code>Blood_Group</code> to the <code>Students</code> table at the <em>Logical Level</em>. The existing Fee Payment screen at the <em>View Level</em> doesn't break or need any changes—it continues working smoothly!</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 4:</strong> Now we know that before building a database, we must design its <strong>Logical Schema</strong> (the tables and relationships). But before writing a single line of code on a computer, how do engineers plan and draw this Schema on paper so everyone can see how tables connect? They draw a visual map called an <strong>Entity-Relationship (ER) Diagram</strong>! Let's learn how to draw ER Diagrams in Chapter 4.</div>",
                codeSnippet: "PHYSICAL DATA INDEPENDENCE:\nChange Hard Drive / File Storage (Bottom) ---> Tables & App (Middle/Top) DO NOT BREAK! ✅\n\nLOGICAL DATA INDEPENDENCE:\nAdd New Table/Column in Schema (Middle)   ---> Existing User Screens (Top) DO NOT BREAK! ✅",
                imgSrc: "images/dbms-12-data-independence.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 4: ENTITY-RELATIONSHIP (ER) DIAGRAMS
    // =========================================================================
    {
        id: "chapter4",
        title: "Chapter 4: Entity-Relationship (ER) Diagrams",
        topics: [
            {
                heading: "What is an ER Diagram? (Drawing the Blueprint Before Building)",
                text: "Imagine trying to build a two-story house without drawing a floor plan first—you might accidentally build the kitchen with no door, or forget the stairs! The exact same thing happens in software engineering. If you jump straight into creating database tables without a plan, your tables won't connect properly.<br><br>" +
                      "In 1976, Dr. Peter Chen invented the <strong>Entity-Relationship (ER) Diagram</strong>. An ER Diagram is a simple <strong>visual flowchart (blueprint)</strong> that uses 3 basic geometric shapes to show how real-world objects connect in a database:<br>" +
                      "<ul>" +
                      "<li><strong>1. Rectangle <code>[ ]</code> = Entity (The Object/Table):</strong> Represents a real-world person, place, or thing (like <code>Student</code>, <code>Teacher</code>, <code>Course</code>, or <code>Book</code>). Later, every Rectangle becomes a <strong>Table</strong>!</li>" +
                      "<li><strong>2. Oval / Ellipse <code>( )</code> = Attribute (The Property/Column):</strong> Represents the details that describe an Entity (like a Student's <code>Roll_No</code>, <code>Name</code>, <code>Age</code>, and <code>Phone</code>). Later, every Oval becomes a <strong>Column</strong> inside that table!</li>" +
                      "<li><strong>3. Diamond <code>< ></code> = Relationship (The Action/Connection):</strong> Shows how two Entities interact with each other (for example: <code>[Student]</code> — <code><Enrolls In></code> — <code>[Course]</code>).</li>" +
                      "</ul>",
                codeSnippet: "THE 3 GOLDEN SHAPES OF AN ER DIAGRAM:\n\n1. RECTANGLE [ Entity ]       ---> Becomes a TABLE   (e.g., [ Student ])\n2. OVAL      ( Attribute )    ---> Becomes a COLUMN  (e.g., ( Name ), ( Roll_No ))\n3. DIAMOND   < Relationship > ---> Connects Tables   (e.g., [Student] -- <Studies> -- [Course])",
                imgSrc: "images/dbms-13-er-intro.jpg"
            },
            {
                heading: "Entities Deep Dive: Strong Entity vs. Weak Entity",
                text: "An <strong>Entity</strong> is any real-world object about which we want to store data. In an ER Diagram, there are two types of Entities:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Strong Entity (Independent - Single Rectangle):</strong> A Strong Entity can exist on its own and has its own unique ID (called a Primary Key). For example, a <code>[Student]</code> or an <code>[Employee]</code> is a Strong Entity because every student has a unique <code>Roll_No</code>. Even if the student hasn't paid a fee installment yet, the student still exists!</li>" +
                      "<li><strong>2. Weak Entity (Dependent - Double Rectangle):</strong> A Weak Entity <strong>cannot exist on its own</strong> without a Strong parent entity, and it does not have a complete Primary Key of its own. For example, consider a <code>[[Guardian / Dependent]]</code> record in a school database, or an <code>[[Installment]]</code> on a loan. Can 'Installment #2' exist in the air without knowing <em>which Student's Fee Account</em> it belongs to? No! If the Student is deleted from the school, their Dependent/Installment records automatically lose meaning. We draw a Weak Entity using a <strong>Double Rectangle</strong> and connect it with a <strong>Double Diamond</strong>.</li>" +
                      "</ul>",
                codeSnippet: "STRONG ENTITY (Single Rectangle)         WEAK ENTITY (Double Rectangle - Needs Parent!)\n+--------------+                         +----------------+        +--------------------+\n|   Student    | (Independent)           |   Employee     | =====> || Family_Dependent ||\n+--------------+                         +----------------+        +--------------------+\nHas Primary Key: Roll_No                 If Employee leaves, Dependent record is removed!",
                imgSrc: "images/dbms-14-strong-weak-entity.jpg"
            },
            {
                heading: "The 5 Types of Attributes (And How to Draw Them!)",
                text: "Not all details (Attributes) about an Entity are the same! ER Diagrams use special styles of Ovals to show <strong>5 different types of Attributes</strong>:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Key Attribute (Oval with <u>Underlined</u> Text):</strong> The one special attribute that is <strong>100% unique</strong> for every single record. Two students can have the same name 'Rahul', and the same age '19', but two students can NEVER have the same <code><u>Roll_No</u></code> or <code><u>Registration_No</u></code>! We underline it inside the oval.</li>" +
                      "<li><strong>2. Simple Attribute (Single Plain Oval):</strong> An atomic value that cannot be broken down any further—like <code>(Age)</code>, <code>(Gender)</code>, or <code>(Roll_No)</code>.</li>" +
                      "<li><strong>3. Composite Attribute (Oval Branching into Smaller Ovals):</strong> An attribute made of multiple smaller parts! For example, <code>(Full_Name)</code> can be split into <code>(First_Name)</code>, <code>(Middle_Name)</code>, and <code>(Last_Name)</code>. Similarly, <code>(Address)</code> branches into <code>(Street)</code>, <code>(City)</code>, <code>(District)</code>, and <code>(Pin_Code)</code>.</li>" +
                      "<li><strong>4. Multi-Valued Attribute (Double Oval <code>(( ))</code>):</strong> What if one student has TWO or THREE phone numbers or multiple email IDs? Any attribute that can hold more than one value for a single person is drawn inside a <strong>Double Oval</strong>, like <code>((Phone_Number))</code>.</li>" +
                      "<li><strong>5. Derived Attribute (Dashed/Dotted Oval <code>( - - )</code>):</strong> A smart attribute that we <strong>do not store permanently</strong> because the computer can calculate it anytime from another attribute! The best example is <code>(- - Age - -)</code>. If you store a student's fixed Age as '18', next year it becomes wrong! Instead, we store <code>(Date_of_Birth)</code> and let the computer automatically calculate <code>Age = Current_Year - Birth_Year</code>!</li>" +
                      "</ul>",
                codeSnippet: "THE 5 ATTRIBUTE OVALS FOR [ STUDENT ]:\n1. Key Attribute          : ( _Roll_No_ )          <-- Underlined (Unique ID!)\n2. Simple Attribute       : ( Gender )             <-- Cannot be split further\n3. Composite Attribute    : ( Address )            <-- Splits into (City), (State), (Pin)\n4. Multi-Valued Attribute : (( Phone_Numbers ))    <-- Double Oval (Student can have 2 numbers)\n5. Derived Attribute      : ( - - Age - - )        <-- Dashed Oval (Calculated from DOB!)",
                imgSrc: "images/dbms-15-attributes.jpg"
            },
            {
                heading: "Relationships & Cardinality (1:1, 1:M, and M:N Connections)",
                text: "When we connect two Entities with a Diamond (Relationship), we must specify <strong>how many</strong> items from the left side can connect to <strong>how many</strong> items on the right side. In DBMS, this counting rule is called <strong>Cardinality</strong>. There are 4 types:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. One-to-One (1 : 1):</strong> One item on the left connects to strictly ONE item on the right. <br><em>Example:</em> One <code>[Country]</code> has only ONE <code>[Prime Minister]</code>, or one <code>[Student]</code> gets only ONE unique <code>[Institute ID Card]</code>.</li>" +
                      "<li><strong>2. One-to-Many (1 : M):</strong> One item on the left can connect to MANY items on the right, but each item on the right belongs to only one on the left.<br><em>Example:</em> One <code>[Department]</code> employs MANY <code>[Teachers]</code>, or one <code>[Customer]</code> can place MANY <code>[Orders]</code> on Amazon.</li>" +
                      "<li><strong>3. Many-to-One (M : 1):</strong> The exact reverse view of One-to-Many! MANY <code>[Students]</code> study in ONE <code>[College]</code>.</li>" +
                      "<li><strong>4. Many-to-Many (M : N):</strong> Many items on the left can connect to many items on the right!<br><em>Example:</em> One <code>[Student]</code> can enroll in MANY <code>[Courses]</code> (like C, DBMS, and Tally), AND one <code>[Course]</code> has MANY <code>[Students]</code> studying inside it!</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 5 (Normalization):</strong> Drawing an ER Diagram helps us turn Entities into Tables and Attributes into Columns. Sounds easy, right? Wait! What if a beginner puts Student details, Course details, Teacher details, and Fee Receipts all inside ONE giant table? Soon, the database will suffer from terrible bugs called <em>Insertion, Deletion, and Update Anomalies</em>! To clean and split messy tables into a 100% bug-free design, we use a step-by-step cleaning process called <strong>Normalization</strong>. Let's master Normalization in Chapter 5!</div>",
                codeSnippet: "CARDINALITY EXAMPLES AT A GLANCE:\n\n1:1 (One-to-One)   : [1 Student]    --- <Has>      --- [1 ID Card]\n1:M (One-to-Many)  : [1 Teacher]    --- <Teaches>  --- [M Classes]\nM:1 (Many-to-One)  : [M Employees]  --- <Work In>  --- [1 Office Branch]\nM:N (Many-to-Many) : [M Students]   --- <Enroll>   --- [N Courses]",
                imgSrc: "images/dbms-16-cardinality.jpg"
            }
        ]
    },
    // =========================================================================
    // CHAPTER 5: CONCEPTS OF NORMALIZATION
    // =========================================================================
    {
        id: "chapter5",
        title: "Chapter 5: Concepts of Normalization & Database Keys",
        topics: [
            {
                heading: "Why Do Tables Get Messy? (The 3 Database Anomalies)",
                text: "Suppose a school principal creates just <strong>ONE giant table</strong> to store Student Details, Course Details, and Teacher Details all together. At first, it looks convenient. But as soon as you try to add, edit, or delete data, <strong>3 dangerous bugs (called Anomalies)</strong> attack your database:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Insertion Anomaly (Cannot Add Data Without Missing Pieces):</strong> Suppose the institute launches a brand-new course called <em>'Python AI'</em> with Teacher <em>'Mr. Rajesh'</em>, but zero students have joined yet. Because the table requires a <code>Student_Roll_No</code> to create a row, the computer refuses to save the new course until at least one student takes admission!</li>" +
                      "<li><strong>2. Update Anomaly (Updating One Fact in 100 Places):</strong> Suppose 500 students are enrolled in the <em>'PGDCA'</em> course taught by <em>'Mr. Anil'</em>, and Mr. Anil changes his phone number. Because his phone number is repeated on all 500 student rows, the clerk must manually edit 500 rows! If they miss Row #412, the database becomes inconsistent.</li>" +
                      "<li><strong>3. Deletion Anomaly (Deleting One Thing Accidentally Erases Another!):</strong> Suppose only ONE student (Rohan) was enrolled in the <em>'Hardware Networking'</em> course. If Rohan leaves the institute and you delete Rohan's row, you accidentally erase the entire <em>'Hardware Networking'</em> course details and its fee structure from your database forever!</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 What is Normalization?</strong> <strong>Normalization</strong> is the scientific step-by-step cleaning process of splitting one giant, messy table into smaller, well-organized tables so that <strong>Data Redundancy (duplication)</strong> and all <strong>3 Anomalies</strong> are completely eliminated!</div>",
                codeSnippet: "MESSY UN-NORMALIZED TABLE (Causes Insertion, Update & Deletion Anomalies!):\n+---------+-------+---------+-------------+--------------+\n| Roll_No | Name  | Course  | Teacher     | Teacher_Phone|\n+---------+-------+---------+-------------+--------------+\n| 101     | Aman  | PGDCA   | Mr. Anil    | 9876500001   | <-- Repeated!\n| 102     | Sneha | PGDCA   | Mr. Anil    | 9876500001   | <-- Repeated!\n| 103     | Rohan | Network | Mr. Rajesh  | 9999900002   | <-- If we delete Rohan, we lose 'Network' course!\n+---------+-------+---------+-------------+--------------+",
                imgSrc: "images/dbms-17-anomalies.jpg"
            },
            {
                heading: "Database Keys (Primary Key, Foreign Key, Candidate Key & Super Key)",
                text: "Before we split a messy table into smaller tables, we need a way to identify rows uniquely and link the split tables back together. We do this using <strong>Database Keys</strong>:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. Primary Key (PK — The Ultimate Unique ID):</strong> A column (or group of columns) that uniquely identifies every single row in a table. <br><strong>Two Golden Rules of a Primary Key:</strong> (A) It must be <strong>100% UNIQUE</strong> (no two rows can have the same value), and (B) It can <strong>NEVER be NULL / Empty</strong>! Every table can have only ONE Primary Key (e.g., <code>Roll_No</code> in the Students table).</li>" +
                      "<li><strong>2. Candidate Key (All Eligible Contestants for Primary Key):</strong> Sometimes a table has multiple columns that are 100% unique—for example, <code>Roll_No</code>, <code>Email_ID</code>, and <code>University_Reg_No</code>. All of these are qualified candidates to become the Primary Key! The DBA picks ONE as the <strong>Primary Key</strong>, and the remaining unselected candidates are called <strong>Alternate Keys</strong>.</li>" +
                      "<li><strong>3. Super Key:</strong> Any combination of columns that can uniquely identify a row (for example, <code>Roll_No</code> alone, or <code>Roll_No + Name</code> together). Every Primary Key is a minimal Super Key.</li>" +
                      "<li><strong>4. Foreign Key (FK — The Bridge Connector Between Tables!):</strong> When you take the <strong>Primary Key of Table A</strong> (like <code>Course_ID</code> from the <code>Courses</code> table) and place it inside <strong>Table B</strong> (the <code>Students</code> table) to connect them, that column inside Table B is called a <strong>Foreign Key</strong>!</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 Everyday Analogy:</strong> Think of your <strong>College Roll Number</strong> as your <strong>Primary Key</strong> inside your college. When you go to the central library and they write your Roll Number on a Book Borrow Slip to know who took the book, your Roll Number on that library slip acts as a <strong>Foreign Key</strong> pointing back to you!</div>",
                codeSnippet: "HOW PRIMARY KEY (PK) AND FOREIGN KEY (FK) LINK TWO TABLES:\n\nParent Table: COURSES                  Child Table: STUDENTS\n+---------------+-------------+        +-------------+--------+---------------+\n| Course_ID(PK) | Course_Name |        | Roll_No(PK) | Name   | Course_ID(FK) |\n+---------------+-------------+        +-------------+--------+---------------+\n| C01           | PGDCA       | <----- | 101         | Aman   | C01           |\n| C02           | DCA         | <----- | 102         | Sneha  | C01           |\n+---------------+-------------+        +-------------+--------+---------------+",
                imgSrc: "images/dbms-18-keys.jpg"
            },
            {
                heading: "First Normal Form (1NF) and Second Normal Form (2NF)",
                text: "Let's clean our messy database step-by-step using the first two stages of Normalization:<br><br>" +
                      "<strong>Stage 1: First Normal Form (1NF) — The 'One Box, One Value' Rule</strong><br>" +
                      "A table is in <strong>1NF</strong> if it obeys one simple rule: <strong>Every single cell (box) must contain only ONE atomic (single) value!</strong> You are strictly forbidden from stuffing multiple comma-separated values (like <code>'C, Java, SQL'</code> or two phone numbers) inside a single box.<br>" +
                      "<ul>" +
                      "<li><strong>Bad (Violates 1NF):</strong> Row 1 has <code>Roll_No: 101 | Name: Aman | Courses: 'C, DBMS'</code>.</li>" +
                      "<li><strong>Fixed (In 1NF):</strong> Split them into separate rows so each box holds only one subject!</li>" +
                      "</ul><br>" +
                      "<strong>Stage 2: Second Normal Form (2NF) — The 'No Partial Dependency' Rule</strong><br>" +
                      "A table is in <strong>2NF</strong> if:<br>" +
                      "1. It is already in <strong>1NF</strong>, AND<br>" +
                      "2. Every non-key column depends on the <strong>WHOLE Primary Key</strong> (not just half of a Composite Primary Key!).<br>" +
                      "<ul>" +
                      "<li><strong>Example:</strong> Suppose a table uses <code>(Roll_No + Course_ID)</code> together as a Composite Primary Key to store a student's <code>Exam_Marks</code>. Marks depend on BOTH the Student AND the Course. But what if we also put <code>Student_Name</code> in that same table? <code>Student_Name</code> only depends on <code>Roll_No</code>—it has nothing to do with <code>Course_ID</code>! This is called <strong>Partial Dependency</strong>.</li>" +
                      "<li><strong>How to Fix for 2NF:</strong> Move <code>Student_Name</code> into a separate <code>Students</code> table, move <code>Course_Name</code> into a <code>Courses</code> table, and keep only <code>Roll_No, Course_ID, Exam_Marks</code> in the <code>Marks</code> table!</li>" +
                      "</ul>",
                codeSnippet: "VIOLATING 1NF (Multiple Values in 1 Cell):      FIXED IN 1NF (1 Value Per Cell!):\n+---------+-------+---------------+             +---------+-------+---------+\n| Roll_No | Name  | Subjects      |             | Roll_No | Name  | Subject |\n+---------+-------+---------------+   ======>   +---------+-------+---------+\n| 101     | Aman  | C, DBMS       |             | 101     | Aman  | C       |\n+---------+-------+---------------+             | 101     | Aman  | DBMS    |\n                                                +---------+-------+---------+",
                imgSrc: "images/dbms-19-1nf-2nf.jpg"
            },
            {
                heading: "Third Normal Form (3NF) and BCNF (Boyce-Codd Normal Form)",
                text: "After reaching 2NF, our database is much cleaner, but we still have two final polishing stages:<br><br>" +
                      "<strong>Stage 3: Third Normal Form (3NF) — The 'No Chain-Reaction (Transitive) Dependency' Rule</strong><br>" +
                      "A table is in <strong>3NF</strong> if it is in 2NF and has <strong>NO Transitive Dependency</strong>. What does that mean? It means a non-key column should NEVER depend on another non-key column!<br>" +
                      "<ul>" +
                      "<li><strong>Example of the Problem:</strong> In a <code>Students</code> table, <code>Roll_No (PK)</code> determines <code>Pin_Code</code> (761108), and <code>Pin_Code</code> determines <code>City_Name</code> (Surada) and <code>District</code> (Ganjam). Notice the chain: <code>Roll_No ➔ Pin_Code ➔ City_Name</code>! If 500 students live in Pin Code 761108, the words 'Surada, Ganjam' are repeated 500 times!</li>" +
                      "<li><strong>How to Fix for 3NF:</strong> Keep <code>Roll_No, Name, Pin_Code</code> in the <code>Students</code> table, and create a separate small <code>Postal_Directory (Pin_Code, City_Name, District)</code> table! Now every non-key column depends <strong>directly and only on the Primary Key</strong>.</li>" +
                      "</ul><br>" +
                      "<strong>Stage 4: BCNF (Boyce-Codd Normal Form — 3.5NF)</strong><br>" +
                      "BCNF is a slightly stricter version of 3NF used in complex tables with multiple overlapping Candidate Keys. Its golden rule is simple: <strong>For every dependency (X ➔ Y), X MUST be a Super Key!</strong> In 99% of real-world software projects, reaching <strong>3NF or BCNF</strong> gives you a 100% clean, professional database design!<br><br>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 6 (SQL Syntax & Structure):</strong> Congratulations! You now know how to plan a database on paper (ER Diagrams) and split it into clean, bug-free tables (Normalization). Now it's time to move from paper to the computer! How do we actually command the DBMS software to build these tables and put data inside them? We use the world's most famous database language: <strong>SQL (Structured Query Language)</strong>! Let's start coding in Chapter 6!</div>",
                codeSnippet: "SUMMARY OF NORMALIZATION RULES (EASY MEMORY TRICK):\n\n1NF  ---> Atomic Values Only (1 Box = 1 Single Value, no commas!)\n2NF  ---> 1NF + No Partial Dependency (Depends on the WHOLE Primary Key)\n3NF  ---> 2NF + No Transitive Chain Dependency (No Non-Key -> Non-Key links)\nBCNF ---> 3NF + Every Determinant (X -> Y) must be a Super Key!",
                imgSrc: "images/dbms-20-3nf-bcnf.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 6: SQL SYNTAX AND STRUCTURE
    // =========================================================================
    {
        id: "chapter6",
        title: "Chapter 6: SQL Syntax and Structure",
        topics: [
            {
                heading: "What is SQL? (Talking to the Database in Plain English)",
                text: "Once you install a Relational DBMS like MySQL, PostgreSQL, or Oracle, how do you talk to it? You cannot click around with a mouse when managing millions of records—you speak to it using a special language called <strong>SQL (Structured Query Language)</strong>, pronounced either as <em>'S-Q-L'</em> or <em>'Sequel'</em>.<br><br>" +
                      "<strong>Why is SQL Every Student's Favorite Language?</strong><br>" +
                      "<ul>" +
                      "<li><strong>1. It Reads Like Simple English:</strong> In C or Java, you have to write loops and complex brackets just to find data. In SQL, you literally type an English sentence: <code>SELECT Name FROM Students WHERE Marks > 80;</code>!</li>" +
                      "<li><strong>2. Declarative Language (Tell It WHAT You Want, Not HOW to Get It):</strong> SQL is a <em>Declarative</em> language. You simply tell the database <em>what</em> result you want, and the DBMS engine automatically figures out the fastest way to search the hard drive and bring it to you.</li>" +
                      "<li><strong>3. Case-Insensitive Keywords:</strong> In C, writing <code>Printf</code> with a capital P causes an error[cite: 2]. In SQL, keywords are <strong>NOT case-sensitive</strong>! Writing <code>select * from students;</code> and <code>SELECT * FROM Students;</code> both work identically! However, good programmers always write SQL keywords in <strong>CAPITAL LETTERS</strong> (like <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>) so the code looks neat and easy to read.</li>" +
                      "<li><strong>4. Ends with a Semicolon (<code>;</code>):</strong> Just like in C[cite: 2], every complete SQL statement ends with a semicolon <code>;</code> to tell the database engine: <em>'My command is finished, run it now!'</em></li>" +
                      "</ul>",
                codeSnippet: "-- In SQL, two dashes (--) start a comment that the computer ignores!\n\nSELECT Name, Marks \nFROM Students \nWHERE City = 'Surada';",
                imgSrc: "images/dbms-21-sql-intro.jpg"
            },
            {
                heading: "SQL Data Types (Choosing the Right Storage Box for Every Column)",
                text: "Whenever you create a table in SQL, you must tell the computer what <strong>Data Type</strong> each column will hold (just like variables in C[cite: 2]). Choosing the right Data Type saves memory and stops people from typing someone's name inside an 'Age' column! Here are the most important SQL Data Types:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. <code>INT</code> (or <code>INTEGER</code>):</strong> Stores whole numbers without decimals—perfect for <code>Roll_No</code>, <code>Age</code>, or <code>Quantity</code> (e.g., <code>101</code>, <code>25</code>).</li>" +
                      "<li><strong>2. <code>DECIMAL(p, s)</code> or <code>FLOAT</code>:</strong> Stores numbers with decimal points—essential for <code>Fee_Amount</code>, <code>Salary</code>, or <code>Percentage</code>. For example, <code>DECIMAL(8, 2)</code> can store up to 8 digits total, with 2 digits after the decimal point (like <code>15500.50</code>).</li>" +
                      "<li><strong>3. <code>CHAR(size)</code> (Fixed-Length Text):</strong> Reserves a strict, fixed number of characters. If you set <code>CHAR(10)</code> and type <code>'A'</code>, it still uses 10 spaces in memory! Best for fixed-length codes like <code>Gender CHAR(1)</code> ('M'/'F') or <code>Pin_Code CHAR(6)</code>.</li>" +
                      "<li><strong>4. <code>VARCHAR(size)</code> (Variable-Length Smart Text):</strong> The most popular text type! If you set <code>VARCHAR(50)</code> for <code>Student_Name</code> and type <code>'Rohan'</code> (5 letters), it smartly uses only 5 spaces of memory and saves the rest! Always wrap text values in single quotes: <code>'Rohan'</code>.</li>" +
                      "<li><strong>5. <code>DATE</code> and <code>DATETIME</code>:</strong> Stores calendar dates in the standard <code>'YYYY-MM-DD'</code> format (e.g., <code>'2026-08-15'</code>) so you can easily sort records by birth date or admission date.</li>" +
                      "</ul>",
                codeSnippet: "COMMON SQL DATA TYPES IN ACTION:\nRoll_No        INT            --> 101\nStudent_Name   VARCHAR(50)    --> 'Pradeep Kumar'\nGender         CHAR(1)        --> 'M'\nCourse_Fee     DECIMAL(8,2)   --> 4500.00\nAdmission_Date DATE           --> '2026-03-10'",
                imgSrc: "images/dbms-22-sql-datatypes.jpg"
            },
            {
                heading: "SQL Constraints (The Traffic Police Rules for Your Columns)",
                text: "What stops a careless data-entry operator from entering a negative age like <code>-25</code>, leaving a student's name blank, or giving two students the exact same Roll Number? <strong>SQL Constraints!</strong> Constraints are strict safety rules attached to columns when building a table. If any data violates a Constraint, SQL blocks it immediately:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. <code>NOT NULL</code>:</strong> Ensures a column can NEVER be left empty/blank. Every student MUST have a <code>Name</code>!</li>" +
                      "<li><strong>2. <code>UNIQUE</code>:</strong> Ensures no two rows can have the same value in this column (great for <code>Phone_Number</code> or <code>Email</code>).</li>" +
                      "<li><strong>3. <code>PRIMARY KEY</code>:</strong> The ultimate combo of <code>NOT NULL + UNIQUE</code>! Uniquely identifies every row in the table (like <code>Roll_No</code>).</li>" +
                      "<li><strong>4. <code>FOREIGN KEY</code>:</strong> Links a column in this table to the <code>PRIMARY KEY</code> of another table, protecting the relationship so nobody can assign a student to a fake Course ID that doesn't exist!</li>" +
                      "<li><strong>5. <code>CHECK</code>:</strong> Validates a custom math or logic rule before accepting data—for example, <code>CHECK (Age >= 5)</code> or <code>CHECK (Marks <= 100)</code>.</li>" +
                      "<li><strong>6. <code>DEFAULT</code>:</strong> Automatically fills in a fallback value if the user doesn't provide one—for example, <code>City VARCHAR(30) DEFAULT 'Surada'</code>.</li>" +
                      "</ul>",
                codeSnippet: "CREATE TABLE Students (\n    Roll_No  INT PRIMARY KEY,                   -- Unique & Cannot be empty!\n    Name     VARCHAR(50) NOT NULL,              -- Mandatory field!\n    Phone    VARCHAR(15) UNIQUE,                -- No duplicate phone numbers!\n    Marks    INT CHECK (Marks >= 0 AND Marks <= 100), -- Must be 0 to 100!\n    City     VARCHAR(30) DEFAULT 'Surada'       -- Auto-fills 'Surada' if left blank!\n);",
                imgSrc: "images/dbms-23-sql-constraints.jpg"
            },
            {
                heading: "The Anatomy of an SQL Query & Search Operators",
                text: "When you ask a question (a <strong>Query</strong>) in SQL, the clauses must always be written in a specific grammatical order, and you can use powerful <strong>Operators</strong> inside the <code>WHERE</code> clause to filter exact records:<br><br>" +
                      "<strong>1. The Strict Order of SQL Clauses:</strong><br>" +
                      "<code>SELECT</code> (columns) ➔ <code>FROM</code> (table) ➔ <code>WHERE</code> (filter rule) ➔ <code>GROUP BY</code> (grouping) ➔ <code>HAVING</code> (group filter) ➔ <code>ORDER BY</code> (sorting A-Z or High-to-Low) ➔ <code>LIMIT</code> (how many rows to show).<br><br>" +
                      "<strong>2. Special SQL Filtering Operators (Inside <code>WHERE</code>):</strong><br>" +
                      "<ul>" +
                      "<li><strong><code>AND</code> / <code>OR</code> / <code>NOT</code>:</strong> Combines conditions (e.g., <code>WHERE Course = 'BCA' AND Marks > 75</code>).</li>" +
                      "<li><strong><code>BETWEEN ... AND ...</code>:</strong> Checks a range inclusively (e.g., <code>WHERE Marks BETWEEN 60 AND 90</code>).</li>" +
                      "<li><strong><code>IN (...)</code>:</strong> Matches any item in a list cleanly without writing ten <code>OR</code> statements (e.g., <code>WHERE City IN ('Surada', 'Berhampur', 'Bhubaneswar')</code>).</li>" +
                      "<li><strong><code>LIKE</code> (Wildcard Pattern Search):</strong> Used to search partial words! The percent sign <code>%</code> means 'any number of characters', and underscore <code>_</code> means 'exactly one character'. For example, <code>WHERE Name LIKE 'S%'</code> finds all students whose name starts with the letter 'S' (Subham, Sneha, Sunil)!</li>" +
                      "<li><strong><code>IS NULL</code> / <code>IS NOT NULL</code>:</strong> Checks if a cell is completely empty (you cannot write <code>= NULL</code>; you must write <code>IS NULL</code>).</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 7 (DDL, DML, DCL, TCL Commands):</strong> Now you understand how SQL syntax, data types, constraints, and operators work! In the database world, all SQL commands are divided into <strong>4 official command families</strong> based on their job: building tables (<strong>DDL</strong>), editing data (<strong>DML</strong>), locking security (<strong>DCL</strong>), and saving transactions (<strong>TCL</strong>). Let's master every single command in Chapter 7!</div>",
                codeSnippet: "-- Find top 5 BCA or PGDCA students whose name starts with 'S'\n-- and scored between 70 and 100, sorted from highest marks to lowest:\n\nSELECT Roll_No, Name, Course, Marks\nFROM Students\nWHERE Course IN ('BCA', 'PGDCA')\n  AND Marks BETWEEN 70 AND 100\n  AND Name LIKE 'S%'\nORDER BY Marks DESC\nLIMIT 5;",
                imgSrc: "images/dbms-24-sql-structure.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 7: DDL, DML, DCL, AND TCL COMMANDS
    // =========================================================================
    {
        id: "chapter7",
        title: "Chapter 7: DDL, DML, DCL, and TCL Commands",
        topics: [
            {
                heading: "The 4 Families of SQL Commands (The Complete Map)",
                text: "One of the most important questions in every computer exam and viva is: <em>'Explain the types of SQL commands with examples.'</em> Every command in SQL belongs to one of <strong>4 specialized teams</strong>:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. DDL — Data Definition Language (The Architects 🏗️):</strong> Commands that build, modify, or demolish the <strong>structure (Schema)</strong> of tables and databases. Commands: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>, <code>RENAME</code>.</li>" +
                      "<li><strong>2. DML — Data Manipulation Language (The Data Workers ✍️):</strong> Commands that insert, read, edit, or delete the <strong>actual rows of data (Instance)</strong> inside the tables. Commands: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> (plus <code>SELECT</code>, which is also called <strong>DQL - Data Query Language</strong>).</li>" +
                      "<li><strong>3. DCL — Data Control Language (The Security Guards 🛡️):</strong> Commands that give or take away user permissions and access rights. Commands: <code>GRANT</code>, <code>REVOKE</code>.</li>" +
                      "<li><strong>4. TCL — Transaction Control Language (The Save-Game Managers 💾):</strong> Commands that permanently save or undo a batch of changes during a transaction. Commands: <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>.</li>" +
                      "</ul>",
                codeSnippet: "SQL COMMAND FAMILIES AT A GLANCE:\n\n+-- DDL (Structure)   : CREATE, ALTER, DROP, TRUNCATE, RENAME\n+-- DML / DQL (Rows)  : INSERT, UPDATE, DELETE, SELECT\n+-- DCL (Security)    : GRANT, REVOKE\n+-- TCL (Save/Undo)   : COMMIT, ROLLBACK, SAVEPOINT",
                imgSrc: "images/dbms-25-sql-families.jpg"
            },
            {
                heading: "DDL — Data Definition Language (CREATE, ALTER, DROP, TRUNCATE)",
                text: "Remember: <strong>DDL commands work on the TABLE STRUCTURE itself</strong>, and they are <strong>Auto-Committed</strong> (once you run them, they save immediately and cannot be easily undone!).<br><br>" +
                      "<ul>" +
                      "<li><strong>1. <code>CREATE</code>:</strong> Builds a brand-new database or table.<br><code>CREATE DATABASE ExcellentDB;</code> or <code>CREATE TABLE Students (...);</code></li>" +
                      "<li><strong>2. <code>ALTER</code>:</strong> Modifies an existing table's structure without deleting the data inside! You can use <code>ALTER TABLE</code> to <strong>ADD</strong> a new column, <strong>MODIFY</strong> a column's size/type, or <strong>DROP</strong> an unwanted column.</li>" +
                      "<li><strong>3. <code>TRUNCATE</code> (Empty the Classroom, Keep the Building):</strong> Deletes <strong>ALL rows</strong> inside a table in one flash so the table becomes completely empty, <strong>but the table structure and columns stay intact</strong> so you can add new students next year!</li>" +
                      "<li><strong>4. <code>DROP</code> (Demolish the Entire Building Forever!):</strong> Completely destroys the data <strong>AND the table structure itself</strong> from the database! If you run <code>DROP TABLE Students;</code>, the table no longer exists at all.</li>" +
                      "</ul>",
                codeSnippet: "-- 1. CREATE a new table\nCREATE TABLE Students (\n    Roll_No INT PRIMARY KEY,\n    Name VARCHAR(50) NOT NULL,\n    Course VARCHAR(20)\n);\n\n-- 2. ALTER table to add a new column 'Phone'\nALTER TABLE Students ADD Phone VARCHAR(15);\n\n-- 3. TRUNCATE (Empties all rows, but 'Students' table structure stays)\nTRUNCATE TABLE Students;\n\n-- 4. DROP (Destroys the entire 'Students' table completely!)\nDROP TABLE Students;",
                imgSrc: "images/dbms-26-ddl.jpg"
            },
            {
                heading: "DML — Data Manipulation Language (INSERT, SELECT, UPDATE, DELETE)",
                text: "Once your table structure is built using DDL, you use <strong>DML commands</strong> every day to work with the rows inside it:<br><br>" +
                      "<ul>" +
                      "<li><strong>1. <code>INSERT INTO</code> (Add New Rows):</strong> Puts new student records inside the table.</li>" +
                      "<li><strong>2. <code>SELECT</code> (Read/View Rows):</strong> Fetches and displays data from the table. Using <code>SELECT *</code> means 'show ALL columns'.</li>" +
                      "<li><strong>3. <code>UPDATE ... SET ... WHERE</code> (Edit Existing Rows):</strong> Changes values in existing rows.<br><strong>⚠️ Golden Warning:</strong> NEVER forget the <code>WHERE</code> clause in an <code>UPDATE</code> or <code>DELETE</code> command! If you run <code>UPDATE Students SET Marks = 95;</code> without a <code>WHERE Roll_No = 101</code>, it will overwrite EVERY student's marks in the entire school to 95!</li>" +
                      "<li><strong>4. <code>DELETE FROM ... WHERE</code> (Remove Specific Rows):</strong> Deletes specific rows that match your <code>WHERE</code> condition.</li>" +
                      "</ul>" +
                      "<div class='analogy-box'><strong>💡 Exam Favorite: DELETE vs. TRUNCATE vs. DROP!</strong><br>" +
                      "• <strong>DELETE (DML):</strong> Removes specific rows using <code>WHERE</code>. Can be undone with <code>ROLLBACK</code>.<br>" +
                      "• <strong>TRUNCATE (DDL):</strong> Removes ALL rows instantly (no <code>WHERE</code> allowed), keeps table structure.<br>" +
                      "• <strong>DROP (DDL):</strong> Destroys all rows AND deletes the entire table structure from the database!</div>",
                codeSnippet: "-- 1. INSERT two students into the table\nINSERT INTO Students (Roll_No, Name, Course, Phone)\nVALUES (101, 'Subham Padhy', 'BCA', '9876543210'),\n       (102, 'Ankita Dash', 'PGDCA', '9123456780');\n\n-- 2. SELECT (Read data)\nSELECT Roll_No, Name FROM Students WHERE Course = 'BCA';\n\n-- 3. UPDATE Roll_No 101's course (Always include WHERE!)\nUPDATE Students SET Course = 'MCA' WHERE Roll_No = 101;\n\n-- 4. DELETE Roll_No 102's record\nDELETE FROM Students WHERE Roll_No = 102;",
                imgSrc: "images/dbms-27-dml.jpg"
            },
            {
                heading: "DCL (GRANT, REVOKE) and TCL (COMMIT, ROLLBACK, SAVEPOINT)",
                text: "Finally, let's see how Database Administrators protect data and manage safe transactions using <strong>DCL</strong> and <strong>TCL</strong>:<br><br>" +
                      "<strong>1. DCL — Data Control Language (Permissions):</strong><br>" +
                      "<ul>" +
                      "<li><strong><code>GRANT</code>:</strong> Gives specific permissions to a user. For example, giving a junior teacher permission to only view and insert marks, but not delete them!</li>" +
                      "<li><strong><code>REVOKE</code>:</strong> Takes back permissions that were previously granted.</li>" +
                      "</ul><br>" +
                      "<strong>2. TCL — Transaction Control Language (Checkpoints & Undo):</strong><br>" +
                      "A <strong>Transaction</strong> is a group of DML operations treated as one single unit of work (like a bank transfer).<br>" +
                      "<ul>" +
                      "<li><strong><code>COMMIT</code>:</strong> Permanently saves all changes made during the current transaction to the hard drive. Once committed, you cannot undo!</li>" +
                      "<li><strong><code>SAVEPOINT</code>:</strong> Creates a temporary bookmark (checkpoint) inside a long transaction, just like a 'Checkpoint' in a video game!</li>" +
                      "<li><strong><code>ROLLBACK</code>:</strong> The 'Ctrl + Z' (Undo button) of SQL! If you make a mistake before committing, <code>ROLLBACK</code> cancels your changes and restores the database back to the last <code>COMMIT</code> or <code>SAVEPOINT</code>!</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🌉 Bridge to Chapter 8 (Joins, Subqueries & Indexing):</strong> You now know how to build tables, insert data, and protect transactions! But remember in Chapter 5 (Normalization), we split our data into multiple separate tables (like <code>Students</code>, <code>Courses</code>, and <code>Fees</code>)? When the Principal wants a single printed report showing <em>Student Name + Course Name + Fee Paid</em> side by side, how do we stitch those separate tables back together? And how do we make searches super fast? Welcome to our final grand chapter: <strong>Joins, Subqueries, and Indexing</strong>!</div>",
                codeSnippet: "-- DCL EXAMPLES (Security Permissions):\nGRANT SELECT, INSERT ON Students TO 'teacher_anil';\nREVOKE INSERT ON Students FROM 'teacher_anil';\n\n-- TCL EXAMPLES (Safe Bank Transfer with Savepoint & Rollback):\nSTART TRANSACTION;\nUPDATE Accounts SET Balance = Balance - 1000 WHERE Acc_No = 501;\nSAVEPOINT step1_deducted;  -- Creates a safety checkpoint!\n\nUPDATE Accounts SET Balance = Balance + 1000 WHERE Acc_No = 999; -- Oops, wrong Acc_No!\nROLLBACK TO step1_deducted; -- Undoes the wrong credit back to the checkpoint!\n\nUPDATE Accounts SET Balance = Balance + 1000 WHERE Acc_No = 502; -- Correct account!\nCOMMIT; -- Permanently saves the transaction!",
                imgSrc: "images/dbms-28-dcl-tcl.jpg"
            }
        ]
    },

    // =========================================================================
    // CHAPTER 8: JOINS, SUBQUERIES, AND INDEXING
    // =========================================================================
    {
        id: "chapter8",
        title: "Chapter 8: Joins, Subqueries, and Indexing",
        topics: [
            {
                heading: "SQL JOINs (Stitching Separate Tables Together Using Common Keys)",
                text: "In a normalized database, <code>Student_Name</code> lives in the <code>Students</code> table, while <code>Course_Title</code> and <code>Course_Fee</code> live in the <code>Courses</code> table. An <strong>SQL JOIN</strong> combines columns from two or more tables into a single result table by matching their common link—usually where <code>Students.Course_ID = Courses.Course_ID</code>!<br><br>" +
                      "<strong>The 4 Essential Types of SQL JOINs:</strong><br>" +
                      "<ul>" +
                      "<li><strong>1. <code>INNER JOIN</code> (Only Matching Records in Both Tables):</strong> Returns ONLY the rows where a match exists in BOTH tables. If a student hasn't chosen a course yet (<code>Course_ID</code> is NULL), or if a course has 0 students, <code>INNER JOIN</code> hides them.</li>" +
                      "<li><strong>2. <code>LEFT JOIN</code> (All from Left Table + Matches from Right):</strong> Returns <strong>100% of rows from the Left table</strong> (<code>Students</code>), plus matching data from the Right table (<code>Courses</code>). If a student hasn't picked a course yet, their name STILL appears, with <code>NULL</code> shown in the course column!</li>" +
                      "<li><strong>3. <code>RIGHT JOIN</code> (All from Right Table + Matches from Left):</strong> The mirror opposite of Left Join! Returns <strong>100% of rows from the Right table</strong> (<code>Courses</code>), even if a course has 0 students enrolled.</li>" +
                      "<li><strong>4. <code>FULL OUTER JOIN</code> (Everything from Both Sides!):</strong> Combines Left Join and Right Join—shows all students (even without courses) AND all courses (even without students).</li>" +
                      "</ul>",
                codeSnippet: "-- Table A: Students (Roll_No, Name, Course_ID)\n-- Table B: Courses  (Course_ID, Course_Title, Fee)\n\n-- INNER JOIN: Show Students alongside their exact Course Title & Fee\nSELECT Students.Roll_No, Students.Name, Courses.Course_Title, Courses.Fee\nFROM Students\nINNER JOIN Courses\nON Students.Course_ID = Courses.Course_ID;\n\n-- LEFT JOIN: Show ALL Students, even if they haven't selected a course yet\nSELECT Students.Name, Courses.Course_Title\nFROM Students\nLEFT JOIN Courses\nON Students.Course_ID = Courses.Course_ID;",
                imgSrc: "images/dbms-29-joins.jpg"
            },
            {
                heading: "Aggregate Functions, GROUP BY, and HAVING (Summarizing Data)",
                text: "Sometimes you don't want to read individual rows—you want summary calculations, like <em>'How many total students are in each course?'</em> or <em>'What is the highest mark in BCA?'</em> SQL provides <strong>5 built-in Aggregate Functions</strong> for instant math:<br><br>" +
                      "<ul>" +
                      "<li><strong><code>COUNT(*)</code>:</strong> Counts the total number of rows (e.g., total students admitted).</li>" +
                      "<li><strong><code>SUM(column)</code>:</strong> Adds up all numbers in a column (e.g., total fees collected today).</li>" +
                      "<li><strong><code>AVG(column)</code>:</strong> Calculates the average value (e.g., average class marks).</li>" +
                      "<li><strong><code>MAX(column)</code> & <code>MIN(column)</code>:</strong> Finds the highest (topper) or lowest value in a column.</li>" +
                      "</ul><br>" +
                      "<strong>How <code>GROUP BY</code> and <code>HAVING</code> Work Together:</strong><br>" +
                      "<ul>" +
                      "<li><strong><code>GROUP BY</code>:</strong> Groups identical values into summary buckets before running the math! For example, <code>GROUP BY Course</code> puts all BCA students in one bucket, PGDCA in another bucket, and counts how many students are in each course.</li>" +
                      "<li><strong><code>HAVING</code> vs. <code>WHERE</code>:</strong> Remember this golden rule: <code>WHERE</code> filters individual rows <em>before</em> grouping, whereas <strong><code>HAVING</code> filters summary groups <em>after</em> <code>GROUP BY</code></strong> (e.g., <code>HAVING COUNT(*) > 10</code> shows only courses that have more than 10 students!).</li>" +
                      "</ul>",
                codeSnippet: "-- Count how many students are in each course, and find the average marks,\n-- but ONLY display courses that have at least 5 students:\n\nSELECT Course, COUNT(*) AS Total_Students, AVG(Marks) AS Average_Marks\nFROM Students\nGROUP BY Course\nHAVING COUNT(*) >= 5;",
                imgSrc: "images/dbms-30-groupby-having.jpg"
            },
            {
                heading: "Subqueries (A Query Hidden Inside Another Query!)",
                text: "Suppose your teacher asks you a tricky two-step question: <em>'Find the names of all students who scored higher than the class average!'</em><br><br>" +
                      "Wait—you don't know what the class average is yet! Normally, you would have to run Query #1 to find the average (say, <code>74.5</code>), write it down on paper, and then type Query #2 to find students with <code>Marks > 74.5</code>.<br><br>" +
                      "Instead of doing two manual steps, SQL lets you place <strong>one Query inside the brackets <code>( )</code> of another Query</strong>! This is called a <strong>Subquery (or Nested / Inner Query)</strong>:<br>" +
                      "<ul>" +
                      "<li><strong>Step 1 (Inner Query Runs First):</strong> The query inside the parentheses <code>(SELECT AVG(Marks) FROM Students)</code> runs first and calculates the exact average (<code>74.5</code>).</li>" +
                      "<li><strong>Step 2 (Outer Query Runs Second):</strong> The main outer query automatically receives that answer (<code>74.5</code>) and immediately finds all students who beat that score!</li>" +
                      "</ul>",
                codeSnippet: "-- SUBQUERY EXAMPLE: Find all students who scored ABOVE the class average!\n\nSELECT Name, Marks\nFROM Students\nWHERE Marks > ( SELECT AVG(Marks) FROM Students );\n--              ^--- Inner Query runs FIRST (e.g., returns 74.5)\n--    ^------------- Outer Query then runs: WHERE Marks > 74.5!",
                imgSrc: "images/dbms-31-subqueries.jpg"
            },
            {
                heading: "Database Indexing (Searching Millions of Rows in 0.001 Seconds!)",
                text: "Imagine I hand you a 1,000-page textbook and say: <em>'Find every page that talks about BCNF Normalization!'</em><br>" +
                      "<ul>" +
                      "<li><strong>Method 1 — Full Table Scan (Without an Index):</strong> You start at Page 1, read Page 2, Page 3... all the way to Page 1,000. In a database with 10 million rows, checking every row one by one (called a <strong>Full Table Scan</strong>) makes your app lag and freeze!</li>" +
                      "<li><strong>Method 2 — Using an Index (The Book's Back Index!):</strong> You flip to the alphabetical <strong>Index page</strong> at the back of the book, jump straight to the letter <strong>'B'</strong>, see <em>'BCNF — Page 412'</em>, and open Page 412 in 2 seconds!</li>" +
                      "</ul>" +
                      "In SQL, when you run <code>CREATE INDEX</code> on a frequently searched column (like <code>Phone_Number</code> or <code>Name</code>), the DBMS builds a hidden, sorted <strong>B-Tree (Balanced Tree)</strong> lookup structure. Instead of checking 1,000,000 rows, the B-Tree cuts the search in half at every step and finds your exact record in less than 20 steps!<br><br>" +
                      "<strong>⚖️ The Trade-Off of Indexing (Why Not Index Every Column?):</strong><br>" +
                      "<ul>" +
                      "<li><strong>Super-Fast Reads:</strong> Indexing makes <code>SELECT</code>, <code>WHERE</code>, and <code>JOIN</code> queries <strong>blazingly fast</strong>!</li>" +
                      "<li><strong>Slightly Slower Writes:</strong> Every time you <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> a row, the database also has to update the Index tree. So only create Indexes on columns that you search frequently! (Note: Every <code>PRIMARY KEY</code> column is indexed automatically by SQL!)</li>" +
                      "</ul>" +
                      "<div class='bridge-callout'><strong>🎓 Course Complete! You Are Now Ready for Real-World Databases:</strong> From understanding raw Data vs. Information, RDBMS vs. NoSQL, 3-Schema Architecture, and ER Diagrams to cleaning tables with 3NF/BCNF Normalization and writing professional SQL DDL, DML, DCL, TCL, Joins, Subqueries, and Indexes—you now have the complete foundation of a Database Engineer!</div>",
                codeSnippet: "-- Create a high-speed B-Tree Index on the 'Phone' column of Students:\nCREATE INDEX idx_student_phone\nON Students (Phone);\n\n-- Now, searching by Phone among 10 lakh students takes 0.001 seconds!\nSELECT * FROM Students WHERE Phone = '9876543210';\n\n-- To remove an index if no longer needed:\nDROP INDEX idx_student_phone ON Students;",
                imgSrc: "images/dbms-32-indexing.jpg"
            }
        ]
    }
];
