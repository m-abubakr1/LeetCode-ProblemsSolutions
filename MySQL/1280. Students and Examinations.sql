SELECT 
      stu.student_id, 
      stu.student_name, 
      sub.subject_name, 
      IFNULL(COUNT(exm.subject_name),0) AS attended_exams
FROM Students stu
CROSS JOIN Subjects sub 
LEFT JOIN Examinations exm 
ON
    stu.student_id = exm.student_id AND sub.subject_name = exm.subject_name

GROUP BY sub.subject_name, stu.student_id
ORDER BY stu.student_id, sub.subject_name;
