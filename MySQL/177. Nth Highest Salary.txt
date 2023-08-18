CREATE FUNCTION getNthHighestSalary(n INT) RETURNS INT
BEGIN
  DECLARE nthHighestSalary INT;
  DECLARE offset INT;
  SET offset = n - 1;
  SET nthHighestSalary = (
    SELECT DISTINCT salary 
    FROM Employee 
    ORDER BY salary DESC 
    LIMIT 1 OFFSET offset
  );
  RETURN nthHighestSalary;
END;