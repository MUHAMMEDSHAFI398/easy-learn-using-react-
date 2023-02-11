import { Route, Routes } from 'react-router-dom';

import ViewTeacher from "../Pages/Office/viewTeacher";
import AddTeacher from "../Pages/Office/AddTeacher";
import Login from '../Pages/Office/Login';
import OfficeHome from "../Pages/Office/Home";
import EachTeacher from "../Pages/Office/EachTeacher";
import ViewStudent from "../Pages/Office/ViewStudent";
import AddStudent from "../Pages/Office/AddStudent";
import ViewBatch from "../Pages/Office/ViewBatch";
import AddBatach from "../Pages/Office/AddBatach";
import EachBatch from "../Pages/Office/EachBatch";
import EditBatch from "../Pages/Office/EditBatch";
import AdminVerification from "../AdminVerificaton/AdminVerification";

const OfficeRoutes = () => (
    <Routes>
        <Route exact path="/office" element={<AdminVerification><Login /></AdminVerification>} ></Route>

        <Route exact path="/office/home" element={<AdminVerification><OfficeHome /></AdminVerification>} ></Route>

        <Route exact path="/office/add-teacher" element={<AdminVerification><AddTeacher /></AdminVerification>} ></Route>

        <Route exact path="/office/teachers" element={<AdminVerification><ViewTeacher /></AdminVerification>} ></Route>

        <Route exact path="/office/each-teacher" element={<AdminVerification><EachTeacher /></AdminVerification>} ></Route>

        <Route exact path="/office/students" element={<AdminVerification><ViewStudent /></AdminVerification>} ></Route>

        <Route exact path="/office/add-student" element={<AdminVerification><AddStudent /></AdminVerification>} ></Route>

        <Route exact path="/office/batches" element={<AdminVerification><ViewBatch /></AdminVerification>} ></Route>

        <Route exact path="/office/add-batch" element={<AdminVerification><AddBatach /></AdminVerification>} ></Route>

        <Route exact path="/office/each-batch" element={<AdminVerification><EachBatch /></AdminVerification>} ></Route>

        <Route exact path="/office/edit-batch" element={<AdminVerification><EditBatch /></AdminVerification>} ></Route>
    </Routes>
);

export default OfficeRoutes;