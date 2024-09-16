import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import * as Yup from "yup";
import { SelectForm } from "../SelectForm";
import { TimeCustomFormik } from "../TimeCustomFormik";
import { isLoading, showToast } from "../../../Features";
import { useDispatch } from "react-redux";
import { getRequest, postRequest } from "../../../Services/axios";
import { useEffect, useState } from "react";
import { InputCustomFormik } from "../InputCustomFormik";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";

const opt = [{ label: "select", value: null }];

const purposeOptions = [
  { label: "Official", value: "Official" },
  { label: "Personal", value: "Personal" },
];
export const AssignRemark = ({
  data,
  selId,
  seltype,
  color,
  handleClose,
  dataForPopup,
  showDriver,
  activeList,
  getListData,
  getMyTeamListData,
  getAllListData,
  isDetails,
  detailsData,
}) => {
  const duration = [
    { label: "00:00", value: "00:00" },
    { label: "00:15", value: "00:15" },
    { label: "00:30", value: "00:30" },
    { label: "00:45", value: "00:45" },
    { label: "01:00", value: "01:00" },
    { label: "01:15", value: "01:15" },
    { label: "01:30", value: "01:30" },
    { label: "01:45", value: "01:45" },
    { label: "02:00", value: "02:00" },
    { label: "02:15", value: "02:15" },
    { label: "02:30", value: "02:30" },
    { label: "02:45", value: "02:45" },
    { label: "03:00", value: "03:00" },
    { label: "03:15", value: "03:15" },
    { label: "03:30", value: "03:30" },
    { label: "03:45", value: "03:45" },
    { label: "04:00", value: "04:00" },
    { label: "04:15", value: "04:15" },
    { label: "04:30", value: "04:30" },
    { label: "04:45", value: "04:45" },
    { label: "05:00", value: "05:00" },
    { label: "05:15", value: "05:15" },
    { label: "05:30", value: "05:30" },
    { label: "05:45", value: "05:45" },
    { label: "06:00", value: "06:00" },
    { label: "06:15", value: "06:15" },
    { label: "06:30", value: "06:30" },
    { label: "06:45", value: "06:45" },
    { label: "07:00", value: "07:00" },
    { label: "07:15", value: "07:15" },
    { label: "07:30", value: "07:30" },
    { label: "07:45", value: "07:45" },
    { label: "08:00", value: "08:00" },
    { label: "08:15", value: "08:15" },
    { label: "08:30", value: "08:30" },
    { label: "08:45", value: "08:45" },
    { label: "09:00", value: "09:00" },
    { label: "09:15", value: "09:15" },
    { label: "09:30", value: "09:30" },
    { label: "09:45", value: "09:45" },
    { label: "10:00", value: "10:00" },
    { label: "10:15", value: "10:15" },
    { label: "10:30", value: "10:30" },
    { label: "10:45", value: "10:45" },
    { label: "11:00", value: "11:00" },
    { label: "11:15", value: "11:15" },
    { label: "11:30", value: "11:30" },
    { label: "11:45", value: "11:45" },
    { label: "12:00", value: "12:00" },
    { label: "12:15", value: "12:15" },
    { label: "12:30", value: "12:30" },
    { label: "12:45", value: "12:45" },
    { label: "13:00", value: "13:00" },
    { label: "13:15", value: "13:15" },
    { label: "13:30", value: "13:30" },
    { label: "13:45", value: "13:45" },
    { label: "14:00", value: "14:00" },
    { label: "14:15", value: "14:15" },
    { label: "14:30", value: "14:30" },
    { label: "14:45", value: "14:45" },
    { label: "15:00", value: "15:00" },
    { label: "15:15", value: "15:15" },
    { label: "15:30", value: "15:30" },
    { label: "15:45", value: "15:45" },
    { label: "16:00", value: "16:00" },
    { label: "16:15", value: "16:15" },
    { label: "16:30", value: "16:30" },
    { label: "16:45", value: "16:45" },
    { label: "17:00", value: "17:00" },
    { label: "17:15", value: "17:15" },
    { label: "17:30", value: "17:30" },
    { label: "17:45", value: "17:45" },
    { label: "18:00", value: "18:00" },
    { label: "18:15", value: "18:15" },
    { label: "18:30", value: "18:30" },
    { label: "18:45", value: "18:45" },
    { label: "19:00", value: "19:00" },
    { label: "19:15", value: "19:15" },
    { label: "19:30", value: "19:30" },
    { label: "19:45", value: "19:45" },
    { label: "20:00", value: "20:00" },
    { label: "20:15", value: "20:15" },
    { label: "20:30", value: "20:30" },
    { label: "20:45", value: "20:45" },
    { label: "21:00", value: "21:00" },
    { label: "21:15", value: "21:15" },
    { label: "21:30", value: "21:30" },
    { label: "21:45", value: "21:45" },
    { label: "22:00", value: "22:00" },
    { label: "22:15", value: "22:15" },
    { label: "22:30", value: "22:30" },
    { label: "22:45", value: "22:45" },
    { label: "23:00", value: "23:00" },
    { label: "23:15", value: "23:15" },
    { label: "23:30", value: "23:30" },
    { label: "23:45", value: "23:45" },
  ];
  const [loading, setLoading] = useState(false);
  const [timeDifferenceInMinutesT, settimeDifferenceInMinutes] = useState("");
  const dispatch = useDispatch();
  const [driverList, setDriverList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);
  const [timeDuration, setTimeDuration] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [option, setOption] = useState(duration);

  // useEffect(()=>{
  //   document.title = `PeopleSol - Assign Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })
  function convertMinutesToHHMM(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Pad hours and minutes with leading zeros
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  }
  function convert12hrTo24hr(time12hr) {
    const [time, period] = time12hr.split(" ");
    const [hours, minutes] = time.split(":");

    let hours24 = parseInt(hours, 10);

    if (period.toUpperCase() === "PM" && hours24 !== 12) {
      hours24 += 12;
    } else if (period.toUpperCase() === "AM" && hours24 === 12) {
      hours24 = 0;
    }
    const paddedHours = hours24.toString().padStart(2, "0");
    const paddedMinutes = parseInt(minutes, 10).toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:00`;
  }

  const getDetails = async (payload) => {
    try {
      dispatch(isLoading(true));
      setLoading(true);
      const result = await postRequest(
        `CompanyCarController/AssignDriver`,
        payload
      );
      if (result)
        dispatch(
          showToast({ text: "Successfully Created", severity: "success" })
        );
      // if (result.data.results?.length > 500) setTotalPages(totalPages + 1);
      // if (result.data.results?.length > 500) setPage(page + 1);
    } catch (error) {
      dispatch(
        showToast({
          text: error?.response?.data ?? "Error in fetching Data",
          severity: "error",
        })
      );
    } finally {
      dispatch(isLoading(false));
      setLoading(false);
      handleClose();
      if (!isDetails) {
        if (activeList === "1") getListData();
        else if (activeList === "2") getMyTeamListData();
        else getAllListData();
      }
    }
  };
  const getDriverData = async (time) => {
    try {
      const Duration = convertMinutesToHHMM(time);
      const result = await getRequest(
        `CompanyCarController/GetDrivers?ID=${selId}&Duration=${Duration}`
      );
      let listData = [];
      result?.data?.data?.map((item) => {
        listData.push({
          label: item.nameWithPersonNumber,
          value: item.employeeId,
        });
      });
      setDriverList(listData);
    } catch (error) {
      dispatch(
        showToast({
          text: "some error occured in fetching data",
          severity: "error",
        })
      );
    } finally {
    }
  };

  const getVehicleData = async (time) => {
    try {
      const Duration = convertMinutesToHHMM(time);
      const result = await getRequest(
        `CompanyCarController/GetVehicles?ID=${selId}&Duration=${Duration}`
      );
      let listData = [];
      result?.data?.data?.map((item) => {
        listData.push({ label: item.title, value: item.id });
      });
      setVehicleList(listData);
    } catch (error) {
      dispatch(
        showToast({
          text: "some error occured in fetching data",
          severity: "error",
        })
      );
    } finally {
    }
  };
  let timeDifferenceInMinutes;
  useEffect(() => {
    const droptimeItem = convert12hrTo24hr(
      isDetails ? detailsData?._request?.dropTime : dataForPopup?.item?.dropTime
    );
    const timeItem = convert12hrTo24hr(
      isDetails ? detailsData?._request?.time : dataForPopup?.item?.time
    );
    const durationForAssign =
      new Date(`2023-12-01T${droptimeItem}`) -
      new Date(`2023-12-01T${timeItem}`);

    timeDifferenceInMinutes = durationForAssign / (1000 * 60);

    settimeDifferenceInMinutes(
      convertMinutesToHHMM(Math.abs(timeDifferenceInMinutes))
    );
    getVehicleData(Math.abs(timeDifferenceInMinutes));
    getDriverData(Math.abs(timeDifferenceInMinutes));
    // getDetails();
  }, []);

  const validationSchema = Yup.object({
    driverId: Yup.string().required("Please select a Driver"),
    vehicleId: Yup.string().required("Please select a Vehicle"),
    // tripDuration: Yup.string().required("Please select Trip Duration"),
  });
  const validationSchema2 = Yup.object({
    vehicleId: Yup.string().required("Please select a Vehicle"),
    // tripDuration: Yup.string().required("Please select Trip Duration"),
  });
  const onSubmit = async (values) => {
    const payload = {
      id: isDetails ? detailsData?.actions[0]?.id : dataForPopup?.item?.id,
      driverId: Number(values.driverId) === 0 ? null : Number(values.driverId),
      duration: timeDifferenceInMinutesT,
      vehicleId: values.vehicleId,
    };
    getDetails(payload);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Formik
            initialValues={{ driverId: "", vehicleId: "", tripDuration: "" }}
            validationSchema={showDriver ? validationSchema : validationSchema2}
            onSubmit={onSubmit}
          >
            <Form>
              {showDriver ? (
                <div>
                  <LabelCustom labelName={"Driver"} mandatory={true} />
                  <SelectForm name="driverId" options={driverList} />
                  {/* <InputCustomFormik type="text" name="driverId" /> */}
                </div>
              ) : (
                ""
              )}
              <div>
                <LabelCustom labelName={"Vehicle"} mandatory={true} />
                <SelectForm name="vehicleId" options={vehicleList} />
              </div>

              <div>
                <LabelCustom labelName={"Trip Duration"} />
                <InputCustomFormik
                  name="tripDuration"
                  isDisabled={true}
                  value={timeDifferenceInMinutesT}
                />
              </div>
              <div className="createFootCust">
                <button
                  type="button"
                  className="button secondaryButton"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  className="button primaryButton"
                  type="submit"
                  style={{ background: color, color: "white" }}
                >
                  {seltype}
                </button>
              </div>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};
