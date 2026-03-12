export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "active" | "on-leave" | "inactive";
  joinDate: string;
  avatar: string;
  phone: string;
}

export const employees: Employee[] = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@company.com", role: "Engineering Manager", department: "Engineering", status: "active", joinDate: "2022-03-15", avatar: "SC", phone: "+1 555-0101" },
  { id: "2", name: "Marcus Johnson", email: "marcus.j@company.com", role: "Senior Designer", department: "Design", status: "active", joinDate: "2021-07-22", avatar: "MJ", phone: "+1 555-0102" },
  { id: "3", name: "Aisha Patel", email: "aisha.p@company.com", role: "Product Manager", department: "Product", status: "active", joinDate: "2023-01-10", avatar: "AP", phone: "+1 555-0103" },
  { id: "4", name: "James Wright", email: "james.w@company.com", role: "Frontend Developer", department: "Engineering", status: "on-leave", joinDate: "2022-11-05", avatar: "JW", phone: "+1 555-0104" },
  { id: "5", name: "Elena Rodriguez", email: "elena.r@company.com", role: "HR Specialist", department: "Human Resources", status: "active", joinDate: "2021-04-18", avatar: "ER", phone: "+1 555-0105" },
  { id: "6", name: "David Kim", email: "david.k@company.com", role: "Backend Developer", department: "Engineering", status: "active", joinDate: "2023-06-01", avatar: "DK", phone: "+1 555-0106" },
  { id: "7", name: "Lisa Thompson", email: "lisa.t@company.com", role: "Marketing Lead", department: "Marketing", status: "active", joinDate: "2022-08-14", avatar: "LT", phone: "+1 555-0107" },
  { id: "8", name: "Omar Hassan", email: "omar.h@company.com", role: "DevOps Engineer", department: "Engineering", status: "inactive", joinDate: "2021-12-03", avatar: "OH", phone: "+1 555-0108" },
  { id: "9", name: "Rachel Green", email: "rachel.g@company.com", role: "UX Researcher", department: "Design", status: "active", joinDate: "2023-03-20", avatar: "RG", phone: "+1 555-0109" },
  { id: "10", name: "Tom Anderson", email: "tom.a@company.com", role: "Sales Manager", department: "Sales", status: "active", joinDate: "2022-01-28", avatar: "TA", phone: "+1 555-0110" },
  { id: "11", name: "Priya Sharma", email: "priya.s@company.com", role: "Data Analyst", department: "Engineering", status: "active", joinDate: "2023-09-12", avatar: "PS", phone: "+1 555-0111" },
  { id: "12", name: "Nathan Brooks", email: "nathan.b@company.com", role: "Finance Manager", department: "Finance", status: "active", joinDate: "2021-10-07", avatar: "NB", phone: "+1 555-0112" },
];

export const departments = ["Engineering", "Design", "Product", "Human Resources", "Marketing", "Sales", "Finance"];
