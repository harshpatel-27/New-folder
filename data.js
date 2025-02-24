[
    {
        "question": "What does JDBC stand for?",
        "opt1": "Java Database Communication",
        "opt2": "Java Database Connectivity",
        "opt3": "Java Data Control",
        "opt4": "Java Dynamic Connection",
        "ans": 2
    },
    {
        "question": "Which of the following is not a JDBC component?",
        "opt1": "DriverManager",
        "opt2": "Statement",
        "opt3": "ConnectionPool",
        "opt4": "ResultSet",
        "ans": 3
    },
    {
        "question": "JDBC is used for:",
        "opt1": "Connecting Java applications to a database",
        "opt2": "Writing Java applets",
        "opt3": "Compiling Java programs",
        "opt4": "Managing server logs",
        "ans": 1
    },
    {
        "question": "Which package contains JDBC classes?",
        "opt1": "java.jdbc",
        "opt2": "javax.sql",
        "opt3": "java.sql",
        "opt4": "org.jdbc",
        "ans": 3
    },
    {
        "question": "What is the first step to establish a connection in JDBC?",
        "opt1": "Load the driver",
        "opt2": "Create a Statement",
        "opt3": "Execute a query",
        "opt4": "Close the connection",
        "ans": 1
    },
    {
        "question": "JDBC architecture consists of:",
        "opt1": "JDBC API and JDBC Driver Manager",
        "opt2": "JDBC API, Driver Manager, and Driver",
        "opt3": "JDBC API, Driver, and Database",
        "opt4": "JDBC API, Driver Manager, Driver, and Database",
        "ans": 4
    },
    {
        "question": "What is the purpose of DriverManager in JDBC?",
        "opt1": "Manage database queries",
        "opt2": "Establish connection with database driver",
        "opt3": "Execute SQL statements",
        "opt4": "Store query results",
        "ans": 2
    },
    {
        "question": "How many types of JDBC drivers are there?",
        "opt1": "2",
        "opt2": "3",
        "opt3": "4",
        "opt4": "5",
        "ans": 3
    },
    {
        "question": "Which of the following is not a type of JDBC driver?",
        "opt1": "JDBC-ODBC Bridge Driver",
        "opt2": "Thin Driver",
        "opt3": "Native-API Driver",
        "opt4": "JavaFX Driver",
        "ans": 4
    },
    //    AJP ch-2
    {
        "question": "Which configuration file is used to deploy a Java Servlet in Apache Tomcat?",
        "opt1": "server.xml",
        "opt2": "tomcat.xml",
        "opt3": "web.xml",
        "opt4": "context.xml",
        "ans": 3
    },
    {
        "question": "Which method is called only once during the lifecycle of a servlet?",
        "opt1": "service()",
        "opt2": "init()",
        "opt3": "doGet()",
        "opt4": "destroy()",
        "ans": 2
    },
    {
        "question": "What is the default port number on which Apache Tomcat runs?",
        "opt1": "80",
        "opt2": "8080",
        "opt3": "9090",
        "opt4": "443",
        "ans": 2
    },
    {
        "question": "Which interface must be implemented by all servlets?",
        "opt1": "ServletConfig",
        "opt2": "HttpServlet",
        "opt3": "Servlet",
        "opt4": "GenericServlet",
        "ans": 3
    },
    {
        "question": "Which method is used to send an error response to the client?",
        "opt1": "sendRedirect()",
        "opt2": "setStatus()",
        "opt3": "sendError()",
        "opt4": "setResponseCode()",
        "ans": 3
    },
    {
        "question": "Which HTTP method is considered idempotent?",
        "opt1": "POST",
        "opt2": "GET",
        "opt3": "PUT",
        "opt4": "DELETE",
        "ans": 3
    },
    {
        "question": "Which object allows data sharing among multiple servlets?",
        "opt1": "ServletConfig",
        "opt2": "ServletContext",
        "opt3": "HttpSession",
        "opt4": "RequestDispatcher",
        "ans": 2
    },
    {
        "question": "Which annotation is used to define a servlet without modifying web.xml?",
        "opt1": "@ServletMapping",
        "opt2": "@WebFilter",
        "opt3": "@WebServlet",
        "opt4": "@ServletConfig",
        "ans": 3
    },
    {
        "question": "Which method is used to invalidate a session?",
        "opt1": "invalidateSession()",
        "opt2": "session.remove()",
        "opt3": "session.invalidate()",
        "opt4": "destroySession()",
        "ans": 3
    },
    {
        "question": "Which type of servlet filter executes before the request reaches the servlet?",
        "opt1": "Response Filter",
        "opt2": "Preprocessing Filter",
        "opt3": "Postprocessing Filter",
        "opt4": "Error Filter",
        "ans": 2
    },
    //  AJP ch-2
    {
        "question": "Which phase is NOT a part of the JSP lifecycle?",
        "opt1": "Translation",
        "opt2": "Compilation",
        "opt3": "Interpretation",
        "opt4": "Execution",
        "ans": 3
    },
    {
        "question": "Which tag is used to declare variables in JSP?",
        "opt1": "<%! %>",
        "opt2": "<% %>",
        "opt3": "<%= %>",
        "opt4": "jsp:declaration",
        "ans": 1
    },
    {
        "question": "Which implicit object represents the servlet context?",
        "opt1": "request",
        "opt2": "response",
        "opt3": "application",
        "opt4": "session",
        "ans": 3
    },
    {
        "question": "Which of the following is NOT an implicit object in JSP?",
        "opt1": "config",
        "opt2": "request",
        "opt3": "response",
        "opt4": "cookie",
        "ans": 4
    },
    {
        "question": "Which JSP tag is used to include another file dynamically?",
        "opt1": "jsp:include",
        "opt2": "jsp:forward",
        "opt3": "jsp:directive.include",
        "opt4": "jsp:import",
        "ans": 1
    },
    {
        "question": "What does EL stand for in JSP?",
        "opt1": "Expression Language",
        "opt2": "Extended Logic",
        "opt3": "Encoding Language",
        "opt4": "Embedded Logic",
        "ans": 1
    },
    {
        "question": "Which JSP tag is used to declare a JavaBean?",
        "opt1": "jsp:bean",
        "opt2": "jsp:useBean",
        "opt3": "jsp:setBean",
        "opt4": "jsp:getBean",
        "ans": 2
    },
    {
        "question": "Which core JSTL tag is used to iterate over collections?",
        "opt1": "<c:loop>",
        "opt2": "<c:forEach>",
        "opt3": "<c:iterate>",
        "opt4": "<c:repeat>",
        "ans": 2
    },
    {
        "question": "What is the default scope of a JavaBean in JSP?",
        "opt1": "page",
        "opt2": "session",
        "opt3": "request",
        "opt4": "application",
        "ans": 1
    },
    {
        "question": "Which JSTL core tag is used to display output in JSP?",
        "opt1": "<c:print>",
        "opt2": "<c:out>",
        "opt3": "<c:display>",
        "opt4": "<c:echo>",
        "ans": 2
    },

    // AJP ch-4

    {
        "question": "Which protocol is primarily used by SOAP-based web services?",
        "opt1": "HTTP",
        "opt2": "FTP",
        "opt3": "SMTP",
        "opt4": "SSH",
        "ans": 1
    },
    {
        "question": "What does REST stand for in web services?",
        "opt1": "Representational State Transfer",
        "opt2": "Remote Execution and State Transfer",
        "opt3": "Resource Encapsulation and Secure Transfer",
        "opt4": "Rapid Execution and Session Transfer",
        "ans": 1
    },
    {
        "question": "Which of the following is NOT a valid HTTP method used in RESTful web services?",
        "opt1": "GET",
        "opt2": "POST",
        "opt3": "CONNECT",
        "opt4": "EXECUTE",
        "ans": 4
    },
    {
        "question": "Which framework is commonly used to implement RESTful web services in Java?",
        "opt1": "Jersey",
        "opt2": "Spring Boot",
        "opt3": "Hibernate",
        "opt4": "Struts",
        "ans": 1
    },
    {
        "question": "Which annotation in JAX-RS is used to inject values from a URL path segment?",
        "opt1": "@PathParam",
        "opt2": "@QueryParam",
        "opt3": "@FormParam",
        "opt4": "@HeaderParam",
        "ans": 1
    },
    {
        "question": "What is the purpose of WSDL in SOAP web services?",
        "opt1": "Defines the web service contract",
        "opt2": "Stores request data",
        "opt3": "Executes service methods",
        "opt4": "Manages user authentication",
        "ans": 1
    },
    {
        "question": "Which HTTP response code represents a successful request in REST?",
        "opt1": "200 OK",
        "opt2": "404 Not Found",
        "opt3": "500 Internal Server Error",
        "opt4": "403 Forbidden",
        "ans": 1
    },
    {
        "question": "Which annotation is used in JAX-RS to specify the HTTP method for a service method?",
        "opt1": "@GET",
        "opt2": "@POST",
        "opt3": "@PUT",
        "opt4": "All of the above",
        "ans": 4
    },
    {
        "question": "Which data format is commonly used in RESTful web services?",
        "opt1": "JSON",
        "opt2": "XML",
        "opt3": "YAML",
        "opt4": "All of the above",
        "ans": 4
    },
    {
        "question": "Which library is commonly used for creating REST clients in Java?",
        "opt1": "JAX-RS Client API",
        "opt2": "Apache CXF",
        "opt3": "Jersey Client",
        "opt4": "All of the above",
        "ans": 4
    },

    // AJP Ch-5

    {
        "question": "Which module in Spring is used for developing web applications?",
        "opt1": "Spring Core",
        "opt2": "Spring MVC",
        "opt3": "Spring Boot",
        "opt4": "Spring Security",
        "ans": 2
    },
    {
        "question": "Which component of Spring MVC is responsible for handling user requests?",
        "opt1": "DispatcherServlet",
        "opt2": "ViewResolver",
        "opt3": "ModelAndView",
        "opt4": "ApplicationContext",
        "ans": 1
    },
    {
        "question": "What is the main advantage of using Spring MVC?",
        "opt1": "Separation of concerns",
        "opt2": "Fast performance",
        "opt3": "Tight coupling",
        "opt4": "Limited features",
        "ans": 1
    },
    {
        "question": "Which annotation is used in Spring MVC to define a controller class?",
        "opt1": "@Controller",
        "opt2": "@RestController",
        "opt3": "@Component",
        "opt4": "@Service",
        "ans": 1
    },
    {
        "question": "Which Hibernate feature is used for converting Java objects into database records?",
        "opt1": "O/R Mapping",
        "opt2": "Caching",
        "opt3": "Lazy Loading",
        "opt4": "Session Management",
        "ans": 1
    },
    {
        "question": "What is the default file name for Hibernate configuration?",
        "opt1": "hibernate.cfg.xml",
        "opt2": "hibernate.xml",
        "opt3": "hibernate.properties",
        "opt4": "config.xml",
        "ans": 1
    },
    {
        "question": "Which of the following is NOT a core module in Spring Framework?",
        "opt1": "Spring AOP",
        "opt2": "Spring ORM",
        "opt3": "Spring Security",
        "opt4": "Spring UI",
        "ans": 4
    },
    {
        "question": "Which annotation in Spring is used to inject dependencies?",
        "opt1": "@Autowired",
        "opt2": "@Inject",
        "opt3": "@Qualifier",
        "opt4": "@Resource",
        "ans": 1
    },
    {
        "question": "What is HQL in Hibernate?",
        "opt1": "Hibernate Query Language",
        "opt2": "Hibernate Quick Language",
        "opt3": "Hibernate Query Logic",
        "opt4": "Hibernate Query Loader",
        "ans": 1
    },
    {
        "question": "Which class in Hibernate represents a single unit of work with the database?",
        "opt1": "Session",
        "opt2": "SessionFactory",
        "opt3": "Transaction",
        "opt4": "Query",
        "ans": 1
    }


]