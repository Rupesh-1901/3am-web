import React, { useEffect, useState } from "react";
import { SelectForm } from "../SelectForm";
import { getRequest, postRequest } from "../../../Services/axios";
import { useLocation } from "react-router-dom";
import { SelectFormikMulti } from "../SelectFormikMulti";
const opt = [{ label: "select", value: null }];

const DropdownInfiniteScroll = ({
  multi = false, //true if multi select
  urlProp = "Employees/GetEmployeesDropDowns",
  name,
  postMethod = false, //true if api is of post method
  placeholder = "Select Option",
  details, //entire details
  editID, //important  // true for edit feature
  optionLabelName = "text", // label name for dropdowns
  optionValueName = "id", // value name for dropdowns
  detailsForEdit, //should be an array always //important for edit
  detailsNamesMulti = [], //should be an array always //important for edit
  detailsNamesSingle = "", //should be a string always
}) => {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [listData, setListData] = useState([]);
  const [option, setOption] = useState([]);
  const [page, setPage] = useState(editID ? 0 : 1);
  const [totalListLength, setTotalListLength] = useState(1);
  const [searchParamemployee, setSearchParamemployee] = useState("");

  const [lastUniqueDetailsForEdit, setLastUniqueDetailsForEdit] = useState([]);
  const [countNonExist, setCountNonExist] = useState(0);
  const locationPath = useLocation();
  let currentUrl = locationPath?.pathname;

  const getOption = async (idArr, searchString, stringName) => {
    try {
      let result;
      let count = 0;
      if (searchString) {
        if (postMethod) {
          result = await postRequest(`${urlProp}?q=${searchString}`);
        } else result = await getRequest(`${urlProp}?q=${searchString}`);
        let searchData = [];
        setTotalListLength(result?.data?.total);

        result.data.results?.map((item) => {
          return searchData.push({
            label: item[optionLabelName],
            value: item[optionValueName],
          });
        });

        setOption(searchData);
      } else {
        if (idArr?.length > 0) {
          const text = idArr?.join(",");
          if (postMethod) {
            result = await postRequest(`${urlProp}?i=${page}&Id=${text}`);
          } else result = await getRequest(`${urlProp}?i=${page}&Id=${text}`);
        } else {
          if (postMethod) {
            result = await postRequest(`${urlProp}?i=${page}`);
          }
          result = await getRequest(`${urlProp}?i=${page}`);
        }
        setTotalListLength(result?.data?.total);
        let newItems = [];

        result.data.results?.forEach((item) => {
          const exists = listData.some(
            (existingItem) => existingItem.value === item[optionValueName]
          );
          if (!exists) {
            newItems.push({
              label: item[optionLabelName],
              value: item[optionValueName],
            });
          } else {
            count = count + 1;
          }
        });
        setCountNonExist(count);
        setListData((prevData) => [...prevData, ...newItems]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
    } finally {
    }
  };
  const handleScrollToBottom = () => {
    if (listData?.length < totalListLength) getOption([]);
  };

  useEffect(() => {
    if (searchParamemployee) {
      getOption([], searchParamemployee);
    }
  }, [searchParamemployee]);
  useEffect(() => {
    if (!editID) {
      getOption([]);
    }
  }, []);
  useEffect(() => {
    if (editID) {
      if (
        detailsForEdit &&
        !detailsForEdit?.some((element) => element === undefined)
      ) {
        const stringifiedArr = JSON?.stringify(
          detailsForEdit?.sort((a, b) => a - b)
        );
        if (
          !lastUniqueDetailsForEdit?.some(
            (element) => element === stringifiedArr
          )
        ) {
          setLastUniqueDetailsForEdit((prev) => [...prev, stringifiedArr]);
          const idArray = detailsForEdit && detailsForEdit;
          idArray?.length > 0 ? getOption(idArray) : getOption([]);
        }
      }
    }
  }, [detailsForEdit]);

  useEffect(() => {
    if (countNonExist > 14 && listData?.length < totalListLength) {
      getOption([]);
    }
  }, [countNonExist]);

  useEffect(() => {
    if (detailsNamesMulti?.length > 0) {
      detailsNamesMulti?.map((item) => {
        let tempVal = option?.filter((options) => options?.label == item);
        if (tempVal.length > 0) {
          setEmployeeArray((prev) => {
            var contains = prev.some((elem) => {
              return JSON.stringify(tempVal[0]) === JSON.stringify(elem);
            });
            if (!contains) {
              return [...prev, tempVal[0]];
            } else {
              return prev;
            }
          });
        }
      });
    }
  }, [details]);

  return (
    <>
      {multi ? (
        <SelectFormikMulti
          values={detailsNamesMulti?.length > 0 ? employeeArray : []}
          name={name}
          placeholder={placeholder}
          onMenuScrollToBottom={handleScrollToBottom}
          options={searchParamemployee ? option : listData}
          onInputChange={(e) => setSearchParamemployee(e)}
        />
      ) : (
        <SelectForm
          // values={
          //   detailsNamesSingle?.length>0
          //     ? option.filter((options) => options.label === detailsNamesSingle)
          //     : opt
          // }
          name={name}
          placeholder={placeholder}
          onMenuScrollToBottom={handleScrollToBottom}
          options={searchParamemployee ? option : listData}
          onInputChange={(e) => setSearchParamemployee(e)}
        />
      )}
    </>
  );
};

export default DropdownInfiniteScroll;
