def merge2sortedarr(arr1, arr2):
    i = 0
    j = 0
    len1 = len(arr1)
    len2 = len(arr2)

    ans = []

    while ((i < len1) and (j < len2)):
        if (arr1[i] < arr2[j]):
            ans.append(arr1[i])
            i = i + 1
        else:
            ans.append(arr2[j])
            j = j + 1

    while (i < len1):
        ans.append(arr1[i])
        i = i + 1

    while (j < len2):
        ans.append(arr2[j])
        j = j + 1

    print(ans)
    return ans


print(merge2sortedarr([1, 3, 5], [2, 4, 6, 8]))
