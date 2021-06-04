import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import HelpIcon from '@material-ui/icons/Help';

function MainPopup(props) {
	return (
		<div className="popup main">
			<div className="inner">
				<h1>Welcome To Data Structure Visualizer!</h1>
				<CancelIcon
					className="icon"
					onClick={props.toggle}
					width="35px"
					height="35px"
				/>
				<div>
					This part's aim is to visualize various 
					data structures. <br />
					Following data structures are visualized:
					<ul className="list-data">
						<li>Binary Search Tree</li>
						<li>Trie</li>
						<li>AVL Trees</li>
						<li>Red-Black Trees</li>
						<li>Min Heap</li>
						<li>Max Heap.</li>
					</ul>
					To learn various visualization features of each section,
					click on{' '}
					<HelpIcon
						width="25px"
						height="25px"
					/>{' '}
					at the top.
				</div>
			</div>
		</div>
	)
}

export default MainPopup
