CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE nth INT unsigned DEFAULT N - 1; 
  RETURN (
      # Write your MySQL query statement below.
      select salary from Employee group by salary order by salary DESC limit 1 offset nth
  );
END