import { useProgress } from '@react-three/drei';

const LoadingScreen = () => {
	const { active, progress } = useProgress();

	return (
		active && (
			<div className="fixed top-0 left-0 bg-[#03030E]">
				<div className="h-svh w-svw p-4 md:p-6 lg:p-12 z-50">
					<div className="flex flex-col h-full justify-center items-center">
						<div className="">
							<h1 className="text-slate-900 text-[24px] lg:text-[33px]">
								Fatih Yonucuoğlu
							</h1>
							<div className="flex gap-1">
								<div>
									<h1 className="lg:text-2xl tracking-widest">Portfolio</h1>
									<div className="w-full h-[2px] md:h-1 rounded-full bg-slate-900">
										<div
											className="h-full bg-white"
											style={{ width: `${progress}%`, transition: 'width 0.3s' }}
										></div>
									</div>
								</div>
								<h1 className="text-5xl lg:text-6xl tracking-tighter">
									{progress.toFixed(2)}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default LoadingScreen;
