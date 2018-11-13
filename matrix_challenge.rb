require 'matrix'

A = Matrix[[1,2,3],[4,5,6]]

B = Matrix[[7,8,9],[10,11,12]]

C = Matrix[[-1,0],[1,2],[3,4]]

# puts A + B

# puts A * 2

# puts A * C

mat_A = [[1,2,3],[4,5,6]]

mat_B = [[7,8,9],[10,11,12]]

mat_C = [[-1,0],[1,2],[3,4]]

# def matrix_sum(matrix_1, matrix_2)
#     summed_matrix = []    
#     row = 0
#     while matrix_1[row] && matrix_2[row]
#         vector = []
#         col = 0        
#         while matrix_1[row][col] && matrix_2[row][col]
#             vector.push(matrix_1[row][col] + matrix_2[row][col])
#             col += 1
#         end
#         summed_matrix.push(vector)
#         row += 1
#     end
#     return summed_matrix
# end

# puts matrix_sum(mat_A, mat_B).inspect

def matrix_transpose(matrix)
    m_row = 0
    t_col = 0
    result = []
    while matrix[m_row]
        m_col = 0
        t_row = 0
        while matrix[m_row][m_col]
            result.push([])
            result[t_row][t_col] = matrix[m_row][m_col]
            m_col += 1
            t_row += 1
        end
        m_row += 1
        t_col += 1
    end
    return result
end

puts matrix_transpose(mat_C).inspect

