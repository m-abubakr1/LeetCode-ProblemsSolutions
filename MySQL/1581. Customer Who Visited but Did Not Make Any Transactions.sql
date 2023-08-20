SELECT customer_id, count(1) AS count_no_trans
FROM Visits AS v
LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id
WHERE amount IS NULL
GROUP BY customer_id
ORDER BY count_no_trans DESC;
